var environment = process.node.NODE_ENV || 'dev';
console.log(environment);

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

var env_config = require('./config.'+environment);
if(typeof env_config === 'object') config = Object.assign(config,env_config);
module.exports = config;
