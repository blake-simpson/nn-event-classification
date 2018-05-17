const brain = require('brain.js');
const data = require('./sample.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.title,
  output: item.type
}));

network.train(trainingData, {
  iterations: 3000
});

console.log('Network has been trained');

process.on('message', message => {
  let answer;

  if (message.input) {
    try {
      answer = network.run(message.input);
    } catch (e) {
      answer = 'unknown';
    }

    process.send({ answer: answer });
  }
});
