var express = require('express');
var router = express.Router();
var userController = require('../controller/controller');

router.get('/', userController.getAllUsers);

router.put('/', userController.updateUser);

router.post('/', userController.addUser);

router.delete('/', userController.delete);

module.exports = router;