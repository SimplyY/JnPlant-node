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
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },

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
