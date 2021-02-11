// IMPORT MODULES
const { connect } = require('./client');
const { setupInput } = require('./input');

// SERVER CONNECTION CALL
console.log('Connecting ...');

setupInput(connect());
