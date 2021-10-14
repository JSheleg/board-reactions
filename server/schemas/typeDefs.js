//import the gql tagged template function
const { gql } = require("apollo-server-express");

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
        image: String
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
        user(username: String!): User
        game: [Game]
        games(category:String):[Game]
        gamebyId(gameId: String!): Game
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
        addComment(commentText: String!, gameId:String!): Game
        addGame(
            game_name: String!, 
            category: String!, 
            min_number_of_players: Int, 
            max_number_of_players: Int, 
            avg_min_game_time: Int, 
            avg_max_game_time: Int, 
            game_description: String!, 
            image: String): Game
        addGameToUser(gameId:String!): User
        favoriteGame(gameId:String!):Game
        addFriend(friendId: ID!): User
        updatePassword(username: String!, password: String!): User
        deleteFriend(friendId:ID!):User


    }
`;
// does the updatedPassword above need to have <Auth> at the end instead of <User>

//export the typeDefs
module.exports = typeDefs;
