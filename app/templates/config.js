var fs = require('fs');

var config = {
  db: {
    username: '',
    password: '',
    name: '<%= project_name_slugified %>',
    port: '27017',
    server: 'localhost',
  },
  log: {
    filename: './error.log'
  },
  resources: {
    root: './resources'
  }
};

var environment = process.env.NODE_ENV || 'dev';
var path = './config.'+environment;
if (!fs.existsSync(path)){
  var env_config = require(path);
  if(typeof env_config === 'object') config = Object.assign(config,env_config);
}

module.exports = config;
