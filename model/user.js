const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: value => md5(value), //密码入库的时候直接MD5加密
        select: false //查询时过滤掉password
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