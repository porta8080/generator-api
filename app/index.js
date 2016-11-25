'use strict';
var yeoman  = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function(){
    yeoman.Base.apply(this, arguments);

    this.option('nr');
    this.option('no-resources');
    this.no_resources = this.options.nr ? true : (this.options['no-resource'] ? true : false);

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
        message: 'Qual será o nome do projeto?',
        store: true
      });
    }

    return this.prompt(questions)
    .then(function (answers) {
      if('project_name' in answers) this.project_name = answers['project_name'];
    }.bind(this));
  },
  install: function(){

  },
  writing: function(){
    var slugify = require('slugify');
    var pluralize = require('pluralize');
    this.project_name_slugified = slugify(this.project_name,'_').toLowerCase();

    this.fs.copyTpl(this.templatePath(''),this.destinationPath(this.project_name_slugified+'/'),{
      project_name_slugified:this.project_name_slugified,
      project_name:this.project_name
    });
  }
});
