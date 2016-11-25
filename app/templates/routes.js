var express = require('express');
var router = express.Router();

router.use('/hello_world',require('./resources/hello_world/hello_world_routes'));

router.use(function(req,res,next){
  var err = new Error('Not found');
  err.status = '404';
  next(err);
});

module.exports = router;
