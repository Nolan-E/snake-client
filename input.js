// IMPORT MODULES
const { stdin } = require("process");

let connection;

const handlUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handlUserInput);
  stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write('Move: up');
    } else if (key === 'a') {
      conn.write('Move: left');
    } else if (key === 's') {
      conn.write('Move: down');
    } else if (key === 'd') {
      conn.write('Move: right');
    }
  });

  return stdin;
};


// EXPORT MODULES
module.exports = {
  setupInput
};
