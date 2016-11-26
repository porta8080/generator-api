'use strict';
var yeoman  = require('yeoman-generator');

function ucwords(input){
  return input.replace(/\b\w/g, l => l.toUpperCase());
}

module.exports = yeoman.Base.extend({
  constructor: function(){
    yeoman.Base.apply(this, arguments);

    this.option('nc');
    this.option('controller');
    this.no_controller = this.options.nc ? true : (this.options['controller'] ? this.options['controller'] === 'false' : false);

    this.option('nd');
    this.option('dao');
    this.no_dao = this.options.nd ? true : (this.options['dao'] ? this.options['dao'] === 'false' : false);

    this.option('nm');
    this.option('model');
    this.no_model = this.options.nm ? true : (this.options['model'] ? this.options['model'] === 'false' : false);

    this.option('nr');
    this.option('routes');
    this.no_routes = this.options.nr ? true : (this.options['routes'] ? this.options['routes'] === 'false' : false);

    this.argument('resource_name', { type: String, required: false });
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
      if('resource_name' in answers) this.resource_name = answers['resource_name'];
    }.bind(this));
  },
  writing: function(){
    var slugify = require('slugify');
    this.resource_name_slugified = slugify(this.resource_name,'_').toLowerCase();
    this.resource_class_name = ucwords(this.resource_name).split(' ').join('');
    var self = this;

    ['controller','dao','model','routes'].forEach(function(input){

      if(input == 'controller' && self.no_controller) return true;
      if(input == 'dao' && self.no_dao) return true;
      if(input == 'model' && self.no_model) return true;
      if(input == 'routes' && self.no_routes) return true;

      self.fs.copyTpl(
        self.templatePath(input+'.js'),
        self.destinationPath('resources/'+self.resource_name_slugified+'/'+self.resource_name_slugified+'_'+input+'.js'),
        { resource_class_name: self.resource_class_name, resource_name_slugified: self.resource_name_slugified }
      );
    });
  }
});
