function getNormalizeByMinMax(feature, min, max) {
    if (min === max) {
        return 1;
    }
    else {
        var value = (feature - min)/(max - min)
        return value < 1 ? value : 1;
    }
}

function getFormatResult(runResult) {
    var formatResult = []
    var formatResultLen = 3

    for (var attr in runResult) {
        if (runResult.hasOwnProperty(attr)) {
            var plant = {}
            plant.plantName = attr
            plant.plantValue = runResult[attr]

            formatResult.push(plant)
        }
    }
    formatResult.sort(function(a, b) {
        return b.plantValue - a.plantValue
    })

    formatResult = formatResult.slice(0, formatResultLen)

    var wholeValue = formatResult.reduce(function(previous, currentItem) {
        return previous + currentItem.plantValue
    }, 0)

    // plantValue: 0.xyz => 'xy.z%'
    formatResult.forEach(function(item) {
        var precision = 4
        item.plantValue = item.plantValue/wholeValue
        item.plantValue = (item.plantValue*100).toString().slice(0, precision + 1) + '%'
    })

    return formatResult
}

module.exports = {
    getNormalizeByMinMax,
    getFormatResult
}
