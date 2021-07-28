const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')


const userController = require("../controller/user")
const { User } = require('../model')

// 登录
router.post('/users/login',
    [body('user.username').notEmpty().withMessage("用户名不能为空").isLength({ min: 5 }).withMessage("用户名长度不能小于5"),
        body('user.password').notEmpty().withMessage("密码不能为空"),
        body('user.email').notEmpty().withMessage("密码不能为空").isEmail().withMessage("邮箱格式不对").bail().custom(async email => {
            const user = await User.findOne({ email })
            if (user) {
                return Promise.reject(`${email}邮箱已经存在`)
            }
        })
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    },
    userController.userLogin)

// 注册
router.post('/users', userController.userRegister)

// 获取当前登录用户
router.get('/user', userController.getLoginerInfo)

// 更新用户
router.put('/user', userController.updateUser)

exports.userRouter = router