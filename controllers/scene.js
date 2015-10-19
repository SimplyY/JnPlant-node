var restful = require('node-restful');
module.exports = function(app, ROOT_ROUTE, route) {
    // Setup the controller for REST.
    var rest = restful.model(
        'scene',
        app.models.scene
    ).methods(['get', 'put', 'post', 'delete']);

    // Register this endpoint with the application.
    console.log(ROOT_ROUTE +  route);

    rest.before('put', needUser);
    rest.before('post', needUser);

    rest.before('delete', needSuperUser);

    rest.register(app, ROOT_ROUTE  + route);

    function needUser(req, res, next) {
        console.log('test');
        if (isUser()) {
            next();
        } else {
            res.status(403);
            res.body("need a user permission");
        }
    }

    function needSuperUser(req, res, next) {
        if (isSuperUser()) {
            next();
        } else {
            res.status(403);
            res.body("need a superUser permission");
        }
    }

    function isUser(argument) {
        //  TODO 验证是否已 qq 登录
        return true;
    }

    function isSuperUser(argument) {
        if (isUser()) {
            // TODO 验证超级用户身份
            return true;
        } else {
            return false;
        }
    }

    // Return middleware.
    return function(req, res, next) {
        next();
    };
};
