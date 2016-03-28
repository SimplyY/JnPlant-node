console.log(`This process is pid ${process.pid}`);

var brain = require('brain');
var getTrainSamples = require('./feature').getTrainSamples;
var getTestSamples = require('./feature').getTestSamples;

var net = new brain.NeuralNetwork({
    hiddenLayers: [4],
    learningRate: 0.3 // global learning rate, useful when training using streams
});


getTrainSamples(function(trainSamples) {
    var samples = trainSamples.samples.map(function(sample) {
        var output = {}
        output[sample.plantName] = 1
        console.log(sample.plantName, sample.features)
        return {
            input: sample.features,
            output: output
        }
    })
    var time1 = Date.now()
    console.log('start train')
    net.train(samples,  {
        errorThresh: 0.0001,  // error threshold to reach
        iterations: 2000,   // maximum training iterations
        log: true,           // console.log() progress periodically
        logPeriod: 100,       // number of iterations between logging
    })
    var time2 = Date.now()
    console.log(time2 - time1)
    console.log('train finished')
    getTestSamples(trainSamples.maxs, trainSamples.mins, function(testSamples) {
        testSamples.forEach(function(testSample) {
            var runResult = net.run(testSample.features)
            console.log('infact plantName: ', testSample.plantName)
            console.log('runResult: ', runResult)
        })
    })
});

// var net = new brain.NeuralNetwork();
//
// net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
//            {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
//            {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);
//
// var output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }
