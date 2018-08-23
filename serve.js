const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);

// keeping this cause i want to make sure i dont want it lol

// const handler = require('serve-handler');
// const http = require('http');

// const server = http.createServer((request, response) => {
//   // You pass two more arguments for config and middleware
//   // More details here: https://github.com/zeit/serve-handler#options
//   return handler(request, response);
// })

// server.listen(3000, () => {
//   console.log('Running at http://localhost:3000');
// });


