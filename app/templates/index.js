var express = require('express');
var body_parser = require('body-parser');
var compression = require('compression');
require('./helpers');
var log = require('./log');

var app = express();

app.use(compression());
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.use('/',require('./routes'));

app.use(function(req,res,next){
  // Not found
  var err = new Error('Not found');
  err.status = 404;
  nex(err);
});

app.use(function(err,req,res,next){
  // Error handler
  log.info(err.message);
  log.error(err.message);

  res.status(err.status || 500).json(err.message);
});

app.listen(8080,function(){
  console.log('Server listening to port 8080');
});
