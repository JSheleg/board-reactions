//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
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
        categories: [Category]
        games(category_name:String):[Game]
    }

`;

//export the typeDefs
module.exports = typeDefs;