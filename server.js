var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
  res.send('feng-ui');
});

app.listen(8888, function() {
  console.log('server listen on 8888');
});
