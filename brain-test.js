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

net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}]);

json = net.toJSON();
var newNet = new brain.NeuralNetwork();
newNet.fromJSON(json);

console.log(newNet);
console.log(json);
console.log(json.layers[1]['0'])

var output = newNet.run([1, 0]);  // [0.987]
console.log(output);
