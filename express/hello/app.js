// Hello world web sever
const express = require('express');

// Create the server
const app = express();

// Respond to one request
app.get('/', function(request, response) {
  response.send('Hello Darren');
});

// Start the server
app.listen(3000);
console.log('Server is ready');
