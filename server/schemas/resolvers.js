const { AuthenticationError } = require('apollo-server-express');
const { Game, Category, Comment, Friends, User }  = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        //Get all categories
        categories: async () => {
            return await Category.find();
        },
        //get all comments
        comments: async () => {
            return await Comment.find();
        },
        //get all games
        games: async () => {
            return await Game.find()
        },
        //get all games by category
        games: async (parent, {category_name}) => {
            const params = category_name? {category_name} : {};
            return Game.find(params).sort({game_name: -1});
        },
        //current user login
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('comment')
                .populate('friends');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          //get all users
          users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('comment')
              .populate('friends');
          },
          //get one user
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('comment')
              .populate('friends');
          },   
    },
    Mutation: {
        //add Category to category lists
        addCategory: async(parent, args) => {
            const category = await Category.create(args);
            return {category};
        },
        // add game to category    
        addGame: async(parent, args, context) => {
            if(context.category){
                const game = await Game.create({...args, category_name: context.category.category_name});

                await Category.findByIdAndUpdate(
                    {_id: context.category._id},
                    {$push: {games: game._id}},
                    {new: true}
                );

                return {game};
            };
        },
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
        addFavoriteGame: async ( parent, {gameId}, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: {games: gameId}},
                    {new: true}
                ).populate('games');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in');
        }
    }  
};

module.exports = resolvers;