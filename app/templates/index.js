var express = require('express');
var body_parser = require('body-parser')

var app = express();

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.use('/',require('./routes'));

app.use(function(err,req,res,next){
  console.log('Server error',err);
  res.status(err.status || 500).json(err.message);
});

app.listen(8080,function(){
  console.log('Server listening to port 8080');
});
