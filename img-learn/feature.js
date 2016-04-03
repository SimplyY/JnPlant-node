var opencv = require('/home/simplyy/opencv/index')
var getPlantsInfo = require('./img-sample/read-img.js').getPlantsInfo

var util = require('./util')

var featureForm = []

var config = require('./config');
var height = config.height
var width = config.width
var rowOfSubImg = config.rowOfSubImg
var colOfSubImg = config.colOfSubImg

var featureNum = config.featureNum

exports.getTrainSamples = function(callback) {
    getPlantsInfo('./训练样本', function(plantsInfos) {
        createTrainSamples(plantsInfos, function(trainSamples) {
            callback(trainSamples)
        })
    })
}

exports.getTestSamples = function(mins, maxs, callback) {
    getPlantsInfo('./测试样本', function(plantsInfos) {
        var testSamples = []
        plantsInfos.forEach(function(plant) {
            plant.plantImgPaths.forEach(function(path) {
                var testSample = {}
                var features = opencv.getfeature(path, height, width, rowOfSubImg, colOfSubImg)
                features = Array.prototype.slice.call(features, 0, featureNum)

                testSample.features = features.map(function(feature, index) {
                    return util.getNormalizeByMinMax(feature, mins[index], maxs[index])
                })
                testSample.plantName = plant.plantName
                testSamples.push(testSample)
            })
        })
        callback(testSamples)
    })
}


function createTrainSamples(plantsInfos, callback) {
    var trainSamples = {
        // one sample has plantName, plantImgPath, features(normalized), 3 attr
        samples: [],

        // max,min len is featureNum, very different from samples
        maxs: [],
        mins: []
    };

    plantsInfos.forEach(function(plant) {
        plant.plantImgPaths.forEach(function(path) {
            trainSamples.samples.push({
                plantName: plant.plantName,
                plantImgPath: path
            });
        });
    });

    for (var i = 0; i < trainSamples.samples.length; i++) {
        var features = Array.prototype.slice.call(
            opencv.getfeature(trainSamples.samples[i].plantImgPath, height, width, rowOfSubImg, colOfSubImg)
        );
        features = features.slice(0, featureNum)
        featureForm.push(features);
        delete trainSamples.samples[i].plantImgPath;
    }

    normalize(featureForm, trainSamples.samples.length, featureNum);

    for (i = 0; i < featureForm.length; i++) {
        trainSamples.samples[i].features = featureForm[i];
    }

    callback(trainSamples);

    function normalize(featureForm, rowNum, featureNum) {
        for (var j = 0; j < featureNum; j++) {
            var column = [];
            for (var i = 0; i < rowNum; i++) {
                column.push(featureForm[i][j]);
            }
            var min = Math.min.apply(null, column);
            var max = Math.max.apply(null, column);
            trainSamples.mins.push(min);
            trainSamples.maxs.push(max);

            for (i = 0; i < rowNum; i++) {
                featureForm[i][j] = getNormalizeByMinMax(featureForm[i][j], min, max);
            }
        }
    }
}
