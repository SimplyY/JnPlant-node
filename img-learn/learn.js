var brain = require('brain')
var getTrainSamples = require('./feature').getTrainSamples
var getTestSamples = require('./feature').getTestSamples

var util = require('./util')

var net = new brain.NeuralNetwork({
    learningRate: 0.3 // global learning rate, useful when training using streams
})

var maxs = []
var mins = []

getTrainSamples(function(trainSamples) {
    var samples = trainSamples.samples.map(function(sample) {
        var output = {}
        output[sample.plantName] = 1
        return {
            input: sample.features,
            output: output
        }
    })
    trainSamples.maxs.forEach(function(item) {
        maxs.push(item)
    })
    trainSamples.mins.forEach(function(item) {
        mins.push(item)
    })

    console.log('start train')
    net.train(samples,  {
        errorThresh: 0.001,  // error threshold to reach
        iterations: 2000,   // maximum training iterations
        log: true,           // console.log() progress periodically
        logPeriod: 100,       // number of iterations between logging
    })

    getTestSamples(trainSamples.mins, trainSamples.maxs, function(testSamples) {
        testSamples.forEach(function(testSample) {
            var runResult = net.run(testSample.features)
            console.log('infact plantName: ', testSample.plantName)
            var formatResult = util.getFormatResult(runResult)
            console.log('runResult: ', formatResult)
        })
    })
})

module.exports = {
    net,
    maxs,
    mins
}
