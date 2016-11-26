var model = require('./<%= resource_name_slugified %>_model');

function <%= resource_class_name %>DAO(){
  this.model = model;
}

module.exports = new <%= resource_class_name %>DAO();
