const { AuthenticationError } = require('apollo-server-express');
const { Game, Comment, User, Favorite }  = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      
        //get all comments
        comments: async () => {
            return await Comment.find();
        },
        //get all games
        games: async () => {
            return await Game.find()
        },
        //get all games by category
        games: async (parent, {category}) => {
            const params = category? {category} : {};
            return Game.find(params).populate('comments').sort({game_name: -1});
        },
        //current user login
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('comments')
                .populate('friends');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          //get all users
          users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('friends')
              .populate('games');
          },
          //get one user
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('friends');
          },   
    },
    Mutation: {
        //login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return {token, user};
        },
        //add user
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return {token, user};
      
          },
        //add a friend to a user
        addFriend: async (parent, {friendId}, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: {friends: friendId}},
                    {new: true}
                ).populate('friends');
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in');
        },
        deleteFriend: async(parents,{friendId}, context) =>{
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {friends:friendId}},
                    {new:true}
                ).populate('friends');
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in');
        },
        //add a game
        addGame: async (parent, args) => {
            const game = await Game.create(args);
            return game;
        },
        //add a game  to user
        addGameToUser: async ( parent, {gameId}, context) => {
            if(context.user){
                let userData = await User.findByIdAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: {games: gameId}},
                    {new: true}
                ).populate('games')

                return userData;
            }

            throw new AuthenticationError('You need to be logged in');
        },
        //add a comment to a game 
        addComment: async (parent,{gameId, commentText},context) => {
            console.log(context.user);
            if(context.user){
                console.log(commentText);
                const comment = await Comment.create({commentText,username:context.user.username});

                const gameData = await Game.findByIdAndUpdate(
                    {_id: gameId},
                    { $push: { comments: comment._id}},
                    { new: true}
                ).populate('comments');

                return gameData;
            }
            throw new AuthenticationError('You need to be logged in');
        },
        updatePassword: async (parent, {username, password}, context) => {

            const updatedUser = await User.findOneAndUpdate(
                {username: username},
                {password: password},
                {new: true}
            )
            return updatedUser
        }
    }  
};

module.exports = resolvers;