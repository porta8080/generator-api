var express = require('express');
var fs = require('fs');
var router = express.Router();

Helper.forEachResourceFileType('routes',function(entry,file_name){
  router.use('/'+entry,require(file_name));
});

router.use(function(req,res,next){
  var err = new Error('Not found');
  err.status = '404';
  next(err);
});

module.exports = router;
