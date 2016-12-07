'use strict';

var yeoman  = require('yeoman-generator');
var slugify = require('slugify');
var fs = require('fs');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  constructor: function(){
    yeoman.Base.apply(this, arguments);

    this.option('nr');
    this.option('no-resources');
    this.no_resources = this.options.nr ? true : (this.options['no-resources'] ? true : false);

    this.argument('project_name', { type: String, required: false });
  },
  welcome: function(){
    console.log('Welcome to Full API generator!');
  },
  prompting: function(){
    var questions = [];

    if(!this.project_name){
      questions.push({
        type: 'input',
        name: 'project_name',
        message: 'What will the will the project name be?',
        store: true
      });
    }

    return this.prompt(questions)
    .then(function (answers) {
      if('project_name' in answers) this.project_name = answers['project_name'];
    }.bind(this));
  },
  writing: function(){
    var self = this;

    this.project_name_slugified = slugify(this.project_name,'_').toLowerCase();
    var root_path = './'+this.project_name_slugified;

    mkdirp.sync(root_path);
    console.log(this.templatePath(''),this.destinationPath(root_path)+'/')
    this.fs.copyTpl(this.templatePath(''),this.destinationPath(root_path)+'/',{
      project_name_slugified: this.project_name_slugified,
      project_name: this.project_name
    });
  }
});
