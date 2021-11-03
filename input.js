let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  const handleUserInput = function () {
    const stdin = process.stdin;
    
    const up = () => conn.write('Move: up');
    const down = () => conn.write('Move: down');
    const left = () => conn.write('Move: left');
    const right = () => conn.write('Move: right');
    
    stdin.on('data', (key) => {
      // process.stdout.write('.');
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        up();
        console.log('up');
      }
      if (key === 's') {
        down();
        console.log('down');
      }
      if (key === 'a') {
        left();
        console.log('left');
      }
      if (key === 'd') {
        right();
        console.log('right');
      }
    });
  };
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


module.exports = { setupInput };