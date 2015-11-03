require('babel-core/register');

var renderer = require('react-engine');
var express = require('express');

var app = express();
var engine = renderer.server.create({});

app.engine('.js', engine);
app.set('view engine', 'js');
app.set('views', __dirname + '/site');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
  res.render('index');
});

app.listen(8888, function() {
  console.log('server listen on 8888');
});
