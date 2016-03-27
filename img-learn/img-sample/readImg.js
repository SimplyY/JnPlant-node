var fse = require('fs-extra');
var path = require('path');

var config = {
    rootPath: "./叶子"
};

var plants = [];

function getNewPlant(thePath) {
    return {
        plantName: path.basename(thePath),
        plantImgPaths: []
    };
}

exports.getPlantsInfo = function(callback) {
    fse.walk(path.join(__dirname, config.rootPath))
        .on('data', function (item) {
            if (item.stats.isDirectory()) {
                if (path.basename(item.path) === path.basename(config.rootPath)) {
                    return;
                }
                var newPlant = getNewPlant(item.path);
                plants.push(newPlant);

                fse.walk(item.path)
                    .on('data', function (item) {
                        if (path.extname(path.basename(item.path)) === '.jpg') {
                            newPlant.plantImgPaths.push(item.path);
                    }
                });
            }
        })
        .on('end', function () {
            callback(plants);
        });
};
