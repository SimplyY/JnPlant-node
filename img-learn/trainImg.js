var opencv = require('/home/simplyy/opencv/index');
var getPlantsInfo = require('./img-sample/readImg.js').getPlantsInfo;

var featureForm = [];
var height = 128;
var width = 128;
var rowOfSubImg = 4;
var colOfSubImg = 8;

var featureNum = rowOfSubImg*colOfSubImg * 3 + 9 + 2;

getPlantsInfo(getTrainResult);

function getTrainResult(plantsInfos) {
    var trainResult = {
        // one sample has plantName, plantImgPath, features(normalized), 3 attr
        samples: [],

        // max,min len is featureNum, very different from samples
        maxs: [],
        mins: []
    };

    plantsInfos.forEach(function(plant) {
        plant.plantImgPaths.forEach(function(path) {
            trainResult.samples.push({
                plantName: plant.plantName,
                plantImgPath: path
            });
        });
    });

    for (var i = 0; i < trainResult.samples.length; i++) {
        var features = Array.prototype.slice.call(
            opencv.getfeature(trainResult.samples[i].plantImgPath, height, width, rowOfSubImg, colOfSubImg)
        );
        featureForm.push(features.slice(0, featureNum));
    }

    normalize(featureForm, trainResult.samples.length, featureNum);

    for (i = 0; i < featureForm.length; i++) {
        trainResult.samples[i].features = featureForm[i];
    }

    function normalize(featureForm, rowNum, featureNum) {
        for (var j = 0; j < featureNum; j++) {
            var column = [];
            for (var i = 0; i < rowNum; i++) {
                column.push(featureForm[i][j]);
            }
            var min = Math.min.apply(null, column);
            var max = Math.max.apply(null, column);
            trainResult.mins.push(min);
            trainResult.maxs.push(max);

            for (i = 0; i < rowNum; i++) {
                if (min === max) {
                    featureForm[i][j] = 1;
                }
                else {
                    featureForm[i][j] = (featureForm[i][j] - min)/(max - min);
                }
            }
        }
    }
}
