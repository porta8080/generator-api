var express = require('express');
var db = require('../../db');
var router = express.Router();

var model = require('./hello_world_model');
var dao = require('./hello_world_dao');
var controller = require('./hello_world_controller');

router.get('/',controller.index.bind(controller));

module.exports = router;
