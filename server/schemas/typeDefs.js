//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        comment: [Comment]
        friend: [User]
    }
    type Comment {
        _id: ID
        commentText: String
        username: String
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
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        comment(_id: ID!): Comment
        categories: [Category]
        games(category_name:String):[Game]
    }

    type Mutation {
        login(email: String!, pasword: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(commentText: String!): Comment
        addCategory(category_name: String!): Category
        addGame(game_name: String!): Game
    }

`;

//export the typeDefs
module.exports = typeDefs;