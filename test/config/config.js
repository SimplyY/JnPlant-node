var express = require('express'),
    app = require('../../app'),
    data = require('./data'),
    mongoose;

mongoose = app.mongoose;

exports.scenes = data.scenes;
exports.app = app;


exports.ready = function(callback) {
    callback();
};
