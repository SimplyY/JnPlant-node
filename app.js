var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var compress = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');
var mongoose = require('mongoose');


var app = express();
app.config = require('./config');

setHeader();

setView();

setMidUse();

setDataBase();

loadRestRoutes();

setWebPage();

console.log('Listening on port ' + app.config.Port + ' ...');
app.listen(app.config.Port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
});


module.exports = app;

function setWebPage() {
    // scene page
    app.get('/scene*', function(req, res) {
        res.render('scene', function(err, html) {
            res.send(html);
        });
    });
    // comment page
    app.get('/comment*', function (req, res) {
        res.render('comment', function (err, html) {
            res.send(html);
        });
    });
}

function loadRestRoutes() {
    app.ROOT_REST_API_ROUTE = '/JnPlant/api';
    var routes = require('./routes');
    var restfulRoutes = routes.restfulRoutes;
    _.each(restfulRoutes, function(controller, route) {
        app.use(route, controller(app, app.ROOT_REST_API_ROUTE, route));
    });
}

function setHeader() {
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
            if (req.method == 'OPTIONS') res.sendStatus(200);
        next();
    });
}

function setView() {
    // set view
    // 原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
    app.engine('.html', require('ejs').__express);
    // 设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
    app.set('view engine', 'html');
    app.set('views', path.join(__dirname, 'views'));
}

function setMidUse() {
    // uncomment after placing your favicon in /public
    app.use(compress());
    app.use(favicon(path.join(__dirname, 'public', 'favicon.ico.png')));
    app.use(logger('dev'));
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public'),{
        etag: false,
    }));
}

function setDataBase() {
    mongoose.connect('mongodb://localhost:27018/JnPlant');
    app.models = require('./models/index');
    // used for testing
    app.mongoose = mongoose;
}
