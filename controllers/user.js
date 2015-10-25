var restful = require('node-restful');


module.exports = function(app, ROOT_ROUTE, route) {
    // Setup the controller for REST.
    var rest = restful.model(
        'user',
        app.models.user
    ).methods(['get', 'put', 'post']);

    console.log(ROOT_ROUTE +  route);

    // Register this endpoint with the application.
    rest.register(app, ROOT_ROUTE  + route);

    // Return middleware.
    return function(req, res, next) {
        next();
    };
};
