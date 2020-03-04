// Hello world web sever
const express = require('express');

// Create the server
const app = express();

// http://cs-linuxlab-05.stlawu.edu:3000/
app.get('/', function(request, response) {
  response.send('Hello Darren');
});

// http://cs-linuxlab-05.stlawu.edu:3000/foo
app.get('/foo', function(request, response) {
  response.send('Hello foo');
});

// http://cs-linuxlab-05.stlawu.edu:3000/foo/bar
app.get('/foo/bar', function(request, response) {
  response.send('Hello bar');
});

// http://cs-linuxlab-05.stlawu.edu:3000/zap/z (for any z)
app.get('/zap/:z', function(request, response) {
  response.send(`Hello ${request.params.z}`);
});

// http://cs-linuxlab-05.stlawu.edu:3000/zap?x=X&y=Y (for any X and Y)
app.get('/zap', function(request, response) {
  response.send(`Hello zap with ${request.query.x} and ${request.query.y}`);
});

// Start the server
app.listen(3000);
console.log('Server is ready');
