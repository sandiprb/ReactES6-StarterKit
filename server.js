var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/app/static'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('listening 127.0.0.1:3000!');
});

