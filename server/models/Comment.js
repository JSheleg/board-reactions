const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: 'You need to leave a comment!',
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
