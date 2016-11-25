'use strict';
var yeoman  = require('yeoman-generator');

function ucwords(input){
  input.replace(/\b\w/g, l => l.toUpperCase());
}

module.exports = yeoman.Base.extend({
  constructor: function(){
    yeoman.Base.apply(this, arguments);

    var slugify = require('slugify');
    var pluralize = require('pluralize');

    this.argument('resource_name', { type: String, required: false });

    this.resource_name_pluralized = pluralize(resource_name);
    this.resource_name_slugified = slugify(resource_name,'_').toLowerCase();
    this.resource_class_name = ucwords(resource_name).split(' ').join('');
  },
  welcome: function(){
    console.log('We are creating your new resource!');
  },
  prompting: function(){
    var questions = [];

    if(!this.resource_name){
      questions.push({
        type: 'input',
        name: 'resource_name',
        message: 'Qual será o nome do resource?'
      });
    }

    return this.prompt(questions)
    .then(function (answers) {
      //
    }.bind(this));
  },
  writing: function(){
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath(this.resource_name_slugified.'/'+this.resource_name_slugified+'_controller.js'),
      { resource_class_name: this.resource_class_name }
    );
  }
});
