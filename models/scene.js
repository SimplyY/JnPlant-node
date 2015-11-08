var mongoose = require('mongoose');

var sceneSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    authorId: {
        type: Number,
        required: true
    },
    authorName: {
        type: String,
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
    imgUrl: {
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
        type: Number,
        default: 0
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
module.exports = sceneSchema;
