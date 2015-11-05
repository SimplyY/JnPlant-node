// 用户表, 只记录安卓端的用户数据
var mongoose = require('mongoose');

// 使用安卓端  open id 检验唯一性
// 先 get 方法查询当前登录的 User open id 在不在服务器数据库表里面
// 如果在，使用 put 方法，去更新服务器数据库的name和imgUrl，并且将get得到的lovesId存储到本地数据库
// 如果不在，使用 post 方法，在服务器数据库增加一条数据
var userSchema = new mongoose.Schema({
    openId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },

    // love ids 使用 ids 在服务器数据库去查询美景和植物(使用 url 的 qureystring in)，返回 list
    loveScenesIds: {
        type: [String]
    },
    lovePlantsIds: {
        type: [String]
    },
});

// Export the model schema.
module.exports = userSchema;
