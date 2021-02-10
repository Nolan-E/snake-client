// IMPORT MODULES
const net = require('net');

// Establishes connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
    password: 396035
  });
  // interpret incoming data from server
  conn.setEncoding('utf-8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: NAE');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  return conn;
};

// EXPORT MODULES
module.exports = {
  connect
};