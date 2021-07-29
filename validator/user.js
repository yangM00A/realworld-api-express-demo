const { body } = require('express-validator')
const validatorHandle = require("../middleware/validator")
const { User } = require('../model')
const MD5 = require("../util/md5")

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

// 登录验证
exports.login = [
    validatorHandle([
        body('user.email').notEmpty().withMessage('邮箱不能为空'),
        body('user.password').notEmpty().withMessage("密码不能为空")
    ]),
    validatorHandle([
        body("user.email").custom(async (email, { req }) => {
            const user = await User.findOne({ email }).select(['password', "email", "bio", "image"])
            if (!user) {
                return Promise.reject("邮箱不存在")
            }
            req.user = user
        })
    ]),
    validatorHandle([
        body('user.password').custom(async (password, { req }) => {
            let user = req.user
            // 比较查询出来的密码=== password
            if (user.password != MD5(password)) {
                return Promise.reject("密码不正确")
            }
        })
    ])
]