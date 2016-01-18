var fs = require('fs');
var request = require('request');

// imgUrl = http://7xkpdt.com1.z0.glb.clouddn.com/20160116_165828.jpg

// var imgs = {
//     "imgFileName": {
//         "characterList": [
//             {"characterName": "xx","characterValue","0.xxx"}
//         ],
//         "indentifyResultList": [
//             {"plantName":"xxx", "plantValue":"xx%"}
//         ],
//         "hasIdentify": false
//     }
// };

var imgs = {};

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
        characterValue,"0"
    };
}

function getNewResult() {
    return {
        plantName: "xxx",
        plantValue: "xx.x%"
    }
}

function sendImgFileNameApi(app) {
    app.get("/sendImgFileNameApi/*", function(req, res) {
        res.send("get it");

        var imgFileName = req.param("name");
        imgs[imgFileName] = getNewImg();
        imgs[imgFileName].hasUploaded = true;

        var download = function(uri, filename, callback){
            request.head(uri, function(err, res, body){
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
        };

        imgUrl = "http://7xkpdt.com1.z0.glb.clouddn.com/" + imgFileName
        download(imgUrl, 'imgs/' + imgFileName, function(){
            // TODO 2. 识别 hasIdentify = true
        });

    });
}

function getImageIdentifyResultApi(app) {
    app.get("/getImageIdentifyResultApi/*", function(req, res) {
        var imgFileName = req.param("name");
        if (imgs[imgFileName] === undefined) {
            res.send("has't send img file name");
        } else if (imgs[imgFileName].hasIdentify === false) {
            res.send("hasn't finish identify");
        } else {
            res.send(JSON.stringify(imgs[imgFileName]));
        }
    });
}
