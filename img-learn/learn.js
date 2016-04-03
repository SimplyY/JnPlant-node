var brain = require('brain');
var getTrainSamples = require('./feature').getTrainSamples;
var getTestSamples = require('./feature').getTestSamples;

var util = require('./util');

var net = new brain.NeuralNetwork({
    learningRate: 0.3 // global learning rate, useful when training using streams
});

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
        errorThresh: 0.002,  // error threshold to reach
        iterations: 2000,   // maximum training iterations
        log: true,           // console.log() progress periodically
        logPeriod: 100,       // number of iterations between logging
    })

    getTestSamples(trainSamples.mins, trainSamples.maxs, function(testSamples) {
        testSamples.forEach(function(testSample) {
            var runResult = net.run(testSample.features)
            console.log('infact plantName: ', testSample.plantName)
            util.getPossibleResult(runResult)
            console.log('runResult: ', runResult)
        })
    })
});

module.exports = {
    net,
    maxs,
    mins
}

// var net = new brain.NeuralNetwork();
//
// net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
//            {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
//            {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);
//
// var output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }
