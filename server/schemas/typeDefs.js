//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        comments: [Comment]
        commentCount: Int
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
    type Category {
        _id: ID
        category_name: String
    }
    type Game {
        _id: ID
        game_name: String
        category: Category
        min_number_of_players: Int
        max_number_of_players: Int
        avg_min_game_time: Int
        avg_max_game_time: Int
        game_description: String
        favoritesCount: Int
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        comments: [Comment]
        categories: [Category]
        games(category_name:String):[Game]
    }

    type Mutation {
        login(email: String!, pasword: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(commentText: String!): Comment
        addCategory(category_name: String!): Category
        addGame(game_name: String!): Game
        addFavorites(game._id: ID!, user._id ): Game
    }

`;

//export the typeDefs
module.exports = typeDefs;