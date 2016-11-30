var bunyan = require('bunyan');

var log = bunyan.createLogger({
  name: '<%= project_name_slugified %>',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'error',
      path: './error.log'
    }
  ]
});

module.exports = log;
