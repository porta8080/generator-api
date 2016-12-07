var dao = require('./<%= resource_name_slugified %>_dao');
var bluebird = require('bluebird');

function <%= resource_class_name %>Controller(){
  this.dao = bluebird.promisifyAll(dao);
}

<%= resource_class_name %>Controller.prototype.index = function(req,res,next){
  res.status(200).write('<%= resource_class_name %>');
  res.end();
};

module.exports = new <%= resource_class_name %>Controller();
