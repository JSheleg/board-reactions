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
    }

    
};

module.exports = resolvers;