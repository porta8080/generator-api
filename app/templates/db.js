var mongoose = require('mongoose');
var config = require('./config');

'use strict';

function __connection(){
  var auth = config.username ? `${config.db.username}:${config.db.password}@` : '';
  return `mongodb://${auth}${config.db.server}:${config.db.port}/${config.db.database}`;
}

mongoose.connect(__connection());

var db = mongoose.connection;

db.on('error',function(err){
  console.log('DB error: ',err);
});

module.exports = mongoose;
