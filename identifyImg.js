var fs = require('fs');
var request = require('request');

module.exports = {
    sendImgFileNameApi: sendImgFileNameApi,
    getImageIdentifyResultApi: getImageIdentifyResultApi
}

var imgs = {};

function sendImgFileNameApi(app) {
    app.get("/sendImgFileNameApi/*", function(req, res) {

        var imgFileName = req.query.name;
        imgs[imgFileName] = getNewImg();
        imgs[imgFileName].hasUploaded = true;

        // download img in imgs folder
        imgUrl = "http://7xkpdt.com1.z0.glb.clouddn.com/" + imgFileName
        download(imgUrl, 'imgs/' + imgFileName, function(){
            // TODO 1.  getNewCharacter 提取特征值
            // TODO 2.  getNewResult 识别 hasIdentify = true
        });
        function download(uri, filename, callback){
            request.head(uri, function(err, res, body){
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
        };

        res.send("get it");
    });
}

function getImageIdentifyResultApi(app) {
    app.get("/getImageIdentifyResultApi/*", function(req, res) {
        var imgFileName = req.query.name;
        if (imgs[imgFileName] === undefined) {
            res.send("has't send this img file name");
        } else if (imgs[imgFileName].hasIdentify === false) {
            res.send("hasn't finish identify");
        } else {
            res.send(JSON.stringify(imgs[imgFileName]));
        }
    });
}

function getNewImg() {
    return {
        characterList:[],
        indentifyResultList:[],
        hasIdentify: false,
    };
}

function getNewCharacter() {
    return {
        characterName: "xxx",
        characterValue: "0"
    };
}

function getNewResult() {
    return {
        plantName: "xxx",
        plantValue: "xx.x%"
    }
}
