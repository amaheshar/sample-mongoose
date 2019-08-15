var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    }
});
let userDto = mongoose.model('users', usersSchema);

module.exports = userDto