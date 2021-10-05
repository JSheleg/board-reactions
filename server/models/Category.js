const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        id:{
            type: Number,
            required: true,
        },
        category_name: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: false
        }
    }
);

const Category = model( 'Category', categorySchema);

module.exports = Category;