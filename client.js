const { time } = require("console");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
    let name = 'SDC';
    let timer = 0;
    const up = () => conn.write('Move: up');
    const down = () => conn.write('Move: down');
    const left = () => conn.write('Move: left');
    const right = () => conn.write('Move: right');
    conn.write(`Name: ${name}`);
    // for (timer = 0; timer < 5000; timer += 100) {
    //   setTimeout(() => {
    //     up();
    //   }, timer);
    //   timer += 100;
    //   setTimeout(() => {
    //     left();
    //   }, timer);
    //   timer += 100;
    // }
    // for (timer = 5000; timer < 10000; timer += 100) {
    //   setTimeout(() => {
    //     right();
    //   }, timer);
    // }
  })
  conn.on('data', (data) => {
    // console.log("Message from server received!");
    console.log(data);
  })
  return conn;
};

module.exports = connect;