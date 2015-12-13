require('babel-core/register');

var renderer = require('react-engine');
var express = require('express');

var app = express();
var engine = renderer.server.create({});

app.engine('.js', engine);
app.set('view engine', 'js');
app.set('views', __dirname + '/site');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/feng-ui'));

app.get('/', function(req, res, next) {
  res.render('index');
});

app.get('/getting-started', function(req, res) { res.render('getting-started'); });

// app.get('/css/grid', function(req, res) { res.render('css/grid'); });
// app.get('/css/typography', function(req, res) { res.render('css/typography'); });
// app.get('/css/buttons', function(req, res) { res.render('css/buttons'); });
// app.get('/css/labels', function(req, res) { res.render('css/labels'); });
// app.get('/css/forms', function(req, res) { res.render('css/forms'); });

app.use(function(req, res) {
  res.render(req.path.substr(1));
});

app.listen(8888, function() {
  console.log('server listen on 8888');
});
