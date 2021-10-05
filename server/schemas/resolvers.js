const  { Game, Category }  = require('../models');

const resolvers = {
    Query: {
        //Get all categories
        categories: async () => {
            return await Category.find();
        },
        //get all games
        games: async () => {
            return await Game.find()
        },
        //get all games by category
        games: async (parent, {category_name}) => {
            const params = category_name? {category_name} : {};
            return Game.find(params).sort({game_name: -1});
        }
        
    }
};

module.exports = resolvers;