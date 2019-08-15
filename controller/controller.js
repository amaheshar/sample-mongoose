var userDao = require('../models/dao/userDao')
var controllerClass = module.exports

controllerClass.getAllUsers = async function(req, res) {
    console.log(' get all users contrller')
    try {
        let result = await userDao.getAllUsers(req.body)
        console.log(' result in controller', result)
        res.send(result);
    } catch (error) {
        console.log(' error in controller', error)
        res.send(error)
    }
}

controllerClass.addUser = async function(req, res) {
    console.log(' req == ', req.body)
    try {
        let result = await userDao.addUser(req.body)
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

controllerClass.updateUser = async function(req, res) {
    try {
        let result = await userDao.updateUser(req.body)
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

controllerClass.delete = async function(req, res) {
    console.log(' req.query = ', req.query)
    try {
        let result = await userDao.delete(req.query)
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}