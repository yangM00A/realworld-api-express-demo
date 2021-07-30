const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    address: String,
    age: Number
})



module.exports.userSchema = userSchema