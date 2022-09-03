var express = require('express');

var app = express();

app.get('/', function (req, res) {
  console.log(req);
  res.send('Bienvenido');
});

app.get('/:name', function (req, res) {
  console.log(req);
  res.send('Hola ' + req.params.name);
});

app.listen(process.env.PORT || 3000);
console.log('Running on http://localhost:' + process.env.PORT);
