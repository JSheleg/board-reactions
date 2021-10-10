const { Schema } = require('mongoose');

const favoriteSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON:{
      
    }
  }
  
);

module.exports = favoriteSchema;
