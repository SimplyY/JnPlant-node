var mongoose = require('mongoose');

// 每一个 comment 将造成一个 notification
var commentSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
    createdTime: {
        type:String,
        required: true
    },

    // replyUserId 当评论是回复评论的评论时才有
    replyUserId: {
        type: Number
    },
});

// Export the model schema.
module.exports = commentSchema;
