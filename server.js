const server = require('server');
const { get } = server.router;
const { status, send } = server.reply;

const cp = require('child_process');
const networkProcess = cp.fork(`${__dirname}/network.js`);

let answer = null;

networkProcess.on('message', message => {
  if (message.answer) {
    answer = message.answer;
    console.log(`Received an answer from the network: ${answer}`);
  }
});

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const action = async ctx => {
  const { input } = ctx.query;
  networkProcess.send({ input: input });
  await delay(100);
  return status(200).json({ answer: answer });
};

server({ port: 8080 }, [get('/', action)]).then(ctx => {
  console.log('Server running at http://localhost:8080/');
});
