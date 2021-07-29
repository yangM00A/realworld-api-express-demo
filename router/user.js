const express = require('express')
const router = express.Router()


const userController = require("../controller/user")
const validator = require("../validator/user")
const auth = require('../middleware/auth')

// 登录
router.post('/users/login',
    validator.login,
    userController.userLogin)

// 注册
router.post('/users', validator.register, userController.userRegister)

// 获取当前登录用户
router.get('/user', auth, userController.getLoginerInfo)

// 更新用户
router.put('/user', userController.updateUser)

exports.userRouter = router