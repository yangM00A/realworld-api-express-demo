const express = require('express')
const router = express.Router()

const userController = require("../controller/user")

// 登录
router.post('/users/login', userController.userLogin)

// 注册
router.post('/users', userController.userRegister)

// 获取当前登录用户
router.get('/user', userController.getLoginerInfo)

// 更新用户
router.put('/user', userController.updateUser)

exports.userRouter = router