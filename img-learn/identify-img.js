var fs = require('fs')
var path = require('path')
var request = require('request')

var opencv = require('/home/simplyy/opencv/index')
var util = require('./util')

var config = require('./config')
var height = config.height
var width = config.width
var rowOfSubImg = config.rowOfSubImg
var colOfSubImg = config.colOfSubImg
var featureNum = config.featureNum

module.exports = {
    sendImgFileNameApi,
    getImageIdentifyResultApi
}

var imgs = {}

function sendImgFileNameApi(app, learn) {
    app.get('/sendImgFileNameApi/*', function(req, res) {

        var imgFileName = req.query.name
        imgs[imgFileName] = getNewImg()
        imgs[imgFileName].hasUploaded = true

        // download img in imgs folder
        var imgUrl = 'http://7xkpdt.com1.z0.glb.clouddn.com/' + imgFileName
        var imgPath = path.join(__dirname, 'img-download', imgFileName)
        download(imgUrl, imgPath, function(){

            // 1. getNewFeatures 提取特征值 run
            var features = opencv.getfeature(imgPath, height, width, rowOfSubImg, colOfSubImg)
            features = Array.prototype.slice.call(features, 0, featureNum)
            features = features.map(function(feature, index) {
                return util.getNormalizeByMinMax(feature, learn.mins[index], learn.maxs[index])
            })
            var runResult = learn.net.run(features)
            var formatResult = util.getFormatResult(runResult)
            console.log(imgFileName, formatResult)

            // 2. getNewResult 识别 hasIdentify = true
            imgs[imgFileName].hasIdentify = true
            imgs[imgFileName].indentifyResultList = formatResult
        })

        res.send('get it')
    })
}

function download(uri, filename, callback){
    request.head(uri, function(err, res, body){
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)
    })
}

function getImageIdentifyResultApi(app) {
    app.get('/getImageIdentifyResultApi/*', function(req, res) {
        var imgFileName = req.query.name
        if (imgs[imgFileName] === undefined) {
            res.send('has\'t send this img file name')
        } else if (imgs[imgFileName].hasIdentify === false) {
            res.send('hasn\'t finish identify')
        } else {
            res.json(imgs[imgFileName])
        }
    })
}

function getNewImg() {
    return {
        indentifyResultList:[],
        hasIdentify: false,
    }
}
