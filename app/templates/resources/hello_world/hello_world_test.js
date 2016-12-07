var mocha = require('mocha');
var assert = require('chai').assert;
var request = require('request');

describe('Resource', function(){
  describe('#index()', function(){
    it('Should respond status 200',function(done){
      request
      .get('http://localhost:8080/hello_world')
      .on('response',function(response){
        assert.equal(response.statusCode,200);
        done();
      });
    });
  });
});
