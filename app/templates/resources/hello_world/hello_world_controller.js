var dao = require('./hello_world_dao');
var bluebird = require('bluebird');

function HelloWorldController(){
  this.dao = bluebird.promisifyAll(dao);
}

HelloWorldController.prototype.index = function(req,res,next){
  var controller = this;
  this.dao.createAsync()
  .then(function(){
    return controller.dao.findAllAsync();
  })
  .then(function(data){
    res.json(data);
  })
  .catch(function(err){
    next(err);
  });
};

module.exports = new HelloWorldController();
