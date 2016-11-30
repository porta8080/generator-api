var model = require('./hello_world_model');

function HelloWorldDAO(){
  this.model = model;
}

HelloWorldDAO.prototype.findAll = function(cb){
  this.model.find({},cb);
};

HelloWorldDAO.prototype.create = function(cb){
  this.model.create({created_at: new Date()},cb);
};

module.exports = new HelloWorldDAO();
