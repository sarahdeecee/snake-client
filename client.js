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
    conn.write(`${name}: Greetings!`);
  })
  conn.on('data', (data) => {
    // console.log("Message from server received!");
    console.log(data);
  })
  return conn;
};

module.exports = connect;