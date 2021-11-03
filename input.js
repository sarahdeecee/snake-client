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
    const hello = () => conn.write('Say: Hey there!');
    const gotcha = () => conn.write('Say: Gotcha!');
    const move = () => conn.write('Say: Get outta the way!');
    stdin.on('data', (key) => {
      // process.stdout.write('.');
      if (key === '\u0003') {
        process.exit();
      }
      (key === 'w') ? up() : null;
      (key === 's') ? down() : null;
      (key === 'a') ? left() : null;
      (key === 'd') ? right() : null;
      (key === 'h') ? hello() : null;
      (key === 'g') ? gotcha() : null;
      (key === 'j') ? move() : null;
    });
  };
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


module.exports = { setupInput };