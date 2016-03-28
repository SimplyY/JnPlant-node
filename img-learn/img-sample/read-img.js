var fse = require('fs-extra');
var path = require('path');

function getNewPlant(thePath) {
    return {
        plantName: path.basename(thePath),
        plantImgPaths: []
    };
}

exports.getPlantsInfo = function(rootPath, callback) {
    var plants = [];

    fse.walk(path.join(__dirname, rootPath))
        .on('data', function (item) {
            if (item.stats.isDirectory()) {
                if (path.basename(item.path) === path.basename(rootPath)) {
                    return;
                }
                var newPlant = getNewPlant(item.path);
                plants.push(newPlant);
            }

            if (item.stats.isFile() && isJpg(item.path)) {
                var plant = plants.find(function(plant) {
                    return plant.plantName === getDirBaseName(item.path)
                })
                plant.plantImgPaths.push(item.path)
            }
        })
        .on('end', function () {
            callback(plants);
        });
};

function isJpg(filePath) {
    return path.extname(path.basename(filePath)) === '.jpg'
}

function getDirBaseName(thePath) {
    return path.basename(path.dirname(thePath))
}
