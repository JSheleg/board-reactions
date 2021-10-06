const mongoose = require('mongoose');
const {Schema} = mongoose;

const friendsSchema = new Schema(
    {
      friend_username: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    }
);

const Friends = mongoose.model('Friends', friendsSchema);

module.exports = Friends;