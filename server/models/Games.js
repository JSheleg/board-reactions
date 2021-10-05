const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        game_name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        category: {
            type: String,
            required:true,
        },
        min_num_players: {
            type: Number,
            required: true,
            default: 1,
        },
        max_num_players:{
            type: Number,
            required: true
        },
        avg_min_time: {
            type: Number,
            required: true
        },
        avg_max_time: {
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
    {
        toJSON: {
            virtuals: true
        }
    }
);

gameSchema.virtual('favoriteTotal').get(function(){
    return this.favorites.length
})

const Game = model('Game', gameSchema)

module.exports = Game;