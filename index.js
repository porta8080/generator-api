var fs = require('fs');
var mkdirp = require('mkdirp');
var root_path = './temp';

function copy(origin,destination,obj){
  if(fs.statSync(origin).isDirectory()){
    if(origin != '.' && origin.slice(-1) != '/'){
      destination = [destination,origin.split('/').pop()].join('/');
      mkdirp.sync(destination);
    }
  }else{
    if(destination != '.' && destination.slice(-1) == '/'){
      destination = [destination,origin.split('/').pop()].join('/');
    }
  }

  function injectValuesInFile(origin,destination,obj){
    var fs = require('fs');
    fs.readFile(origin, 'utf8', function (err,data) {
      if (err) return console.log(err);

      for(var k in obj) data = data.replace(new RegExp('<%=( )*'+k+'( )*%>','g'),obj[k]);

      fs.writeFile(destination, data, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  }

  function copyRecursively(origin,destination,obj){
    var entry_destination, entry_origin;
    if(fs.statSync(origin).isDirectory()){
      fs.readdirSync(origin).filter(function(entry){
        if( entry != '.' && entry != '..'){
          entry_origin = [origin,entry].join('/');
          entry_destination = [destination,entry].join('/');

          if(fs.statSync(entry_origin).isDirectory()) mkdirp.sync(entry_destination);
          copyRecursively(entry_origin,entry_destination,obj);
        }
      });
    }else injectValuesInFile(origin,destination,obj);
  }

  copyRecursively(origin,destination,obj);
}

copy('./app/templates','./temp',{
  project_name_slugified: 'generator',
  project_name: 'generator'
});

// process.stdin.resume(); //so the program will not close instantly
//
// function exitHandler() {
//     console.log('Finalizando aplicação');
// }
//
// process.on('exit', exitHandler);
// process.on('SIGINT', exitHandler);
// process.on('uncaughtException',function(err){ process.exit(); });
