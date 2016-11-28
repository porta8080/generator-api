var fs = require('fs');
var root_path = './resources';
var file_name;

// default test scripts
fs.readdirSync(root_path).filter(function(entry){
  if(fs.statSync([root_path,entry].join('/')).isDirectory()){
    file_name = [root_path,entry,entry+'_test.js'].join('/');
    if(fs.existsSync(file_name)){
      require(file_name);
    }
  }
});
