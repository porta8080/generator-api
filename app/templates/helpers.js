var fs = require('fs');
var config = require('./config');
var helper = {};

helper.forEachResourceFileType = function(file_type,cb){
  var path = config.resources.root;
  fs.readdirSync(path).filter(function(entry){
    if(fs.statSync([path,entry].join('/')).isDirectory()){
      file_name = [path,entry,entry+'_'+file_type+'.js'].join('/');
      if(fs.existsSync(file_name)){
        cb(entry,file_name);
      }
    }
  });
};

helper.forEachResourceFileType('helper',function(entry,file_name){
  helper[entry] = require(file_name);
});

global.Helper = helper;
