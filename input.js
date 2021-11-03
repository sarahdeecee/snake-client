const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  const stdin = process.stdin;

  const up = () => stdin.write('Move: up');
  const down = () => stdin.write('Move: down');
  const left = () => stdin.write('Move: left');
  const right = () => stdin.write('Move: right');

  stdin.on('data', (key) => {
    // process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      up();
    }
    if (key === 's') {
      down();
    }
    if (key === 'a') {
      left();
    }
    if (key === 'd') {
      right();
    }
  });
};

module.exports = { setupInput, handleUserInput };