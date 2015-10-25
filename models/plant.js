var mongoose = require('mongoose');

// 每一个 comment 将造成一个 notification
var plantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    // author's id
    author: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    // 用来在美景 list 里呈现一个美景的图片
    img: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    // 是否审核通过
    hasChecked: {
        type: Boolean,
        required: true
    },

    loversAmount: {
        type: Number
    },
    commentsIds: {
        type: [Number],
    },

    // gps info
    // 经度
    longitude: {
        type: [Number],
    },
    // 纬度
    latitude: {
        type: [Number],
    },

});

// Export the model schema.
module.exports = plantSchema;
