const userDto = require('../dto/userDto')

var userDaoClass = module.exports

userDaoClass.getAllUsers = function(params) {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await userDto.find()
            console.log(' result = ', result)
            resolve(result);
        } catch (error) {
            reject(error);

        }
    })
}

userDaoClass.addUser = function(params) {
    return new Promise(async function(resolve, reject) {
        try {
            console.log(' params in adding data= ', params)
            let result = await userDto.insertMany({ id: params.id, name: params.name })
            console.log(' result = ', result)
            resolve(result);
        } catch (error) {
            reject(error);

        }
    })
}

userDaoClass.updateUser = function(params) {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await userDto.findOneAndUpdate({ id: params.id }, { name: params.name })
            resolve(result);
        } catch (error) {
            reject(error);

        }
    })
}

userDaoClass.deleteUser = function(params) {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await userDto.remove({ id: params.id })
            resolve(result);
        } catch (error) {
            reject(error);

        }
    })
}