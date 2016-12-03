var express = require('express');
var body_parser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
var cors = require('cors');
var session = require('express-session');
// var cookieSession = require('cookie-session');
var config = require('./config');
var log = require('./log');

require('./helpers');

var app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(body_parser.urlencoded({limit: '10mb', extended: false}));
app.use(body_parser.json({limit: '10mb'}));
app.use(session({ secret: 'full-api', saveUninitialized: true, resave: false, cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }}));
// app.use(cookieSession({
//   name: 'cookie_session',
//   keys: ['full-api','some-other-key'],
//   secret: 'full-api', //optional if 'keys' is set
//   maxAge: 1000 * 60 * 60 * 24 * 7
// }));

app.use('/',require('./routes'));

app.use(function(err,req,res,next){
  // Error handler
  log.info(err.message);
  log.error(err.message);

  res.status(err.status || 500).json(err.message);
});

app.listen(config.port,function(){
  console.log('Server listening to port '+config.port);
});
