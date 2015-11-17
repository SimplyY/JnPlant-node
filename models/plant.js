var mongoose = require('mongoose');

// 每一个 comment 将造成一个 notification
var plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    // author's id
    authorId: {
        type: Number,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    // 用来在美景 list 里呈现一个美景的图片
    imgUrl: {
        type: String,
        required: true
    },

    // 是否审核通过
    hasChecked: {
        type: Boolean,
        required: true
    },

    loversAmount: {
        type: Number,
        default: 0
    },
    commentsIds: {
        type: [Number],
    },

    // gps info
    locations: [{
        // 经度
        longitude: Number,
        // 纬度
        latitude: Number,
    }]
});

// Export the model schema.
module.exports = plantSchema;
