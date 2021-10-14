const mongoose = require('mongoose');
const { Schema } = mongoose;
const favoriteSchema = require('./Favorite');

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
            required: true,
            trim: true
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
        image: {
            type: String,
            default: null
        },
        comments: [
            {
                type:Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        favorites:[favoriteSchema],
        
        
    },
    {
        toJSON: {
            virtuals: true
        }
    }

);

gameSchema.virtual('favoritesCount').get(function() {
    return this.favorites.length;
})

gameSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})


const Game = mongoose.model('Game', gameSchema)

module.exports = Game;