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
    author: {
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

    lovers: {
        type: [String]
    },
    comments: {
        type: [String],
    },
});


// Export the model schema.
module.exports = sceneSchema;
