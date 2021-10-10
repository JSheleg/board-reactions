//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        questionOne: String
        answerOne: String
        questionTwo: String
        answerTwo: String
        friends: [User]
        friendCount: Int
        games: [Game]
        gamesCount: Int
    }
    type Comment {
        _id: ID
        commentText: String
        username: String
        createdAt: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Game {
        _id: ID
        game_name: String
        category: String
        min_number_of_players: Int
        max_number_of_players: Int
        avg_min_game_time: Int
        avg_max_game_time: Int
        game_description: String
        favoritesCount: Int
        favorites:[Favorite]
        comments:[Comment]
        commentCount: Int

    }
    type Favorite {
        _id: ID
        username: String
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): [User]
        comments: [Comment]
        games(category:String):[Game]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(
            username: String!, 
            email: String!, 
            password: String!, 
            questionOne: String!,
            answerOne: String!,
            questionTwo: String!,
            answerTwo: String!
            ): Auth
        addComment(commentText: String!): Comment
        addGame(game_name: String!, category: String!, min_number_of_players: Int, max_number_of_players: Int, avg_min_game_time: Int, avg_max_game_time: Int, game_description: String!): Game
        addFavoriteGame(_id:ID!): Game
        addFriend(friendId: ID!): User
        updatePassword(username: String!, password: String!): User
        deleteFriend(friendId:ID!):User
        

    }
`;

//export the typeDefs
module.exports = typeDefs;