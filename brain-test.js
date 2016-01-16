/* make json look like:
  {
    layers: [
      { x: {},
        y: {}},
      {'0': {bias: -0.98771313, weights: {x: 0.8374838, y: 1.245858},
       '1': {bias: 3.48192004, weights: {x: 1.7825821, y: -2.67899}}},
      { f: {bias: 0.27205739, weights: {'0': 1.3161821, '1': 2.00436}}}
    ]
  }
*/

var brain = require('brain');
var net = new brain.NeuralNetwork();

net.train([{input: { r: [0.1,0.2,0.3]}, output: { black: 1 }},
           {input: { r: [0.2,0.3,0.4]}, output: { white: 1 }},
           {input: { r: [0.3,0.2,0.4]}, output: { white: 1 }}]);


json = net.toJSON();
var newNet = new brain.NeuralNetwork();
newNet.fromJSON(json);

var output = newNet.run({r:[0.1, 0, 0.3]});  // [0.987]
console.log(output);
