var mongoose = require('mongoose');

var HelloWorldModel = function(){};

HelloWorldModel.prototype.sayHello = function(){
  console.log('Hello, I am '+this._id+' and I was created at '+this.created_at.toString());
};

var schema = new mongoose.Schema({
  created_at: Date
},{collection: 'hello_world'});

// Import Model methods to mongoose records
schema.methods = Object.create(HelloWorldModel.prototype);

module.exports = mongoose.model('HelloWorld', schema);
