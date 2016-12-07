var express = require('express');
var db = require('../../db');
var router = express.Router();

var model = require('./<%= resource_name_slugified %>_model');
var dao = require('./<%= resource_name_slugified %>_dao');
var controller = require('./<%= resource_name_slugified %>_controller');

router.get('/',controller.index.bind(controller));

module.exports = router;
