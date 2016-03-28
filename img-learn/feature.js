var opencv = require('/home/simplyy/opencv/index')
var getPlantsInfo = require('./img-sample/read-img.js').getPlantsInfo

var featureForm = []
var height = 128
var width = 128
var rowOfSubImg = 4
var colOfSubImg = 8

var featureNum = rowOfSubImg*colOfSubImg * 3 + 9 + 2

exports.getTrainSamples = function(callback) {
    getPlantsInfo('./测试样本', function(plantsInfos) {
        createTrainSamples(plantsInfos, function(trainSamples) {
            console.log('trainSamples:', trainSamples)
            callback(trainSamples)
        })
    })
}

exports.getTestSamples = function(maxs, mins, callback) {
    getPlantsInfo('./测试样本', function(plantsInfos) {
        var testSamples = []
        plantsInfos.forEach(function(plant) {
            plant.plantImgPaths.forEach(function(path) {
                var testSample = {}
                var features = opencv.getfeature(path, height, width, rowOfSubImg, colOfSubImg)
                features = Array.prototype.slice.call(features, 0, featureNum)

                testSample.features = features.map(function(feature, index) {
                    return getNormalizeByMinMax(feature, maxs[index], mins[index])
                })
                testSample.plantName = plant.plantName
                testSamples.push(testSample)
            })
        })
        console.log('testSamples:', testSamples)
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
        featureForm.push(features.slice(0, featureNum));
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

function getNormalizeByMinMax(feature, min, max) {
    if (min === max) {
        return 1;
    }
    else {
        var value = (feature - min)/(max - min)
        return value < 1 ? value : 1;
    }
}
