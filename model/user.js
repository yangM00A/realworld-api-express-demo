const mongoose = require('mongoose')
const baseModel = require('./base-model')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passworld: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    ...baseModel
})


module.exports = userSchema