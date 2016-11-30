var express = require('express');
var body_parser = require('body-parser');
var compression = require('compression');
var config = require('./config');
var log = require('./log');

require('./helpers');

var app = express();

app.use(compression());
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.use('/',require('./routes'));

app.use(function(req,res,next){
  // Not found
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function(err,req,res,next){
  // Error handler
  log.info(err.message);
  log.error(err.message);

  res.status(err.status || 500).json(err.message);
});

app.listen(config.port,function(){
  console.log('Server listening to port '+config.port);
});
