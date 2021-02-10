const handlUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handlUserInput);
  return stdin;
};

// EXPORT MODULES
module.exports = {
  setupInput
};
