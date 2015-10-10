var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');
var mongoose = require('mongoose');


var app = express();
app.config = require('./config')


// view
// 原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', require('ejs').__express);
// 设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));


// db
mongoose.connect('mongodb://localhost:27018/JnPlant');
app.models = require('./models/index');
// used for testing
app.mongoose = mongoose;

// Load the routes.
app.ROOT_REST_API_ROUTE = '/JnPlant/api';
var routes = require('./routes');
var restfulRoutes = routes.restfulRoutes;
_.each(restfulRoutes, function(controller, route) {
    app.use(route, controller(app, app.ROOT_REST_API_ROUTE, route));
});

console.log('Listening on port ' + app.config.Port + ' ...');
app.listen(app.config.Port);


app.get('/contribute', function (req, res) {
    res.render('contribute', {});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
