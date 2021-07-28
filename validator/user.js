const { body } = require('express-validator')
const validatorHandle = require("../middleware/validator")
const { User } = require('../model')

// 注册校验
exports.register = validatorHandle([
    body('user.username').notEmpty().withMessage("用户名不能为空").isLength({ min: 5 }).withMessage("用户名长度不能小于5"),

    body('user.password').notEmpty().withMessage("密码不能为空"),
    
    body('user.email').notEmpty().withMessage("密码不能为空").isEmail().withMessage("邮箱格式不对")
    .bail()
    .custom(async email => {
        const user = await User.findOne({ email })
        if (user) {
            return Promise.reject(`${email}邮箱已经存在`)
        }
    })
])