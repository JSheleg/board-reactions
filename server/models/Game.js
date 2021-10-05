const mongoose = require('mongoose');
const { Schema } = mongoose;


const gameSchema = new Schema(
    {
        game_name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        min_number_of_players: {
            type: Number,
            required: true,
            default: 1,
        },
        max_number_of_players:{
            type: Number,
            required: true
        },
        avg_min_game_time: {
            type: Number,
            required: true
        },
        avg_max_game_time: {
            type: Number,
            required: true
        },
        game_description: {
            type: String,
            required: true
        },
        favorites: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]

    },
    
);


const Game = mongoose.model('Game', gameSchema)

module.exports = Game;