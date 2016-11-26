var mongoose = require('mongoose');

var <%= resource_class_name %>Model = function(){};

<%= resource_class_name %>Model.prototype.sayHello = function(){
  console.log('Hello, I am '+this._id+' and I was created at '+this.created_at.toString());
};

var schema = new mongoose.Schema({
  created_at: Date
},{collection: '<%= resource_name_slugified %>'});

// Import Model methods to mongoose records
schema.methods = Object.create(<%= resource_class_name %>Model.prototype);

module.exports = mongoose.model('<%= resource_class_name %>', schema);
