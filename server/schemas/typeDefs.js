//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
    type Game {
        _id: ID
        game_name: String
        category_id: Int
        min_number_of_players: Int
        max_number_of_players: Int
        avg_min_game_time: Int
        avg_max_game_time: Int
        game_description: String
        
    }

    type Query{
        games: [Game]
    }

`;

//export the typeDefs
module.exports = typeDefs;