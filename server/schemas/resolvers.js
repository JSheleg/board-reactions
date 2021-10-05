const { Game } = require('../models');

const resolvers = {
    Query: {
        games: async () => {
            return Game.find().sort({game_name:-1});
        }
    }
};

module.exports = resolvers;