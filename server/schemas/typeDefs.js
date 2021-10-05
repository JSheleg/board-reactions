//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
    type Game {
        _id: ID
        game_name: String
        category: String
        min_num_players: Number
        max_num_players: Number
        avg_min_time: Number
        avg_max_time: Number
        game_description: String
        favorites: [User]
        favoriteTotal: Int

    }

    type Query{
        games: [Game]
    }

`;

//export the typeDefs
module.exports = typeDefs;