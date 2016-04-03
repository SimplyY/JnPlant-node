function getNormalizeByMinMax(feature, min, max) {
    if (min === max) {
        return 1;
    }
    else {
        var value = (feature - min)/(max - min)
        return value < 1 ? value : 1;
    }
}

function getPossibleResult(runResult) {
    var minPossible = 0.01
    for (var attr in runResult) {
        if (runResult.hasOwnProperty(attr)) {
            if (runResult[attr] < minPossible) {
                delete runResult[attr]
            }
        }
    }
}

module.exports = {
    getNormalizeByMinMax,
    getPossibleResult
}
