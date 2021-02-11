// IMPORT MODULES
const net = require('net');
const cst = require('./constants');

// Establishes connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: cst.ip,
    port: cst.port,
    password: cst.password
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

  return conn;
};

// EXPORT MODULES
module.exports = {
  connect
};