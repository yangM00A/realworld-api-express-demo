const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
// 登录
exports.userLogin = async (req, res, next) => {
    try {
        let user = req.user.toJSON()
        delete user.password
        // 登录校验结束生成token
        let token = await jwt.sign({ id: user._id }, jwtSecret)
        // 返回用户信息和token
        res.json({ ...user, token })
    } catch (error) {
        next(error)
    }
}

// 注册
exports.userRegister = async (req, res, next) => {
    try {
        console.log(req.body);
        // 数据验证
        // 保存数据
        const user = new User(req.body.user)
        await user.save()
        res.status(201).json({
            user
        })
    } catch (error) {
        next(error)
    }
}

// 获取当前登录用户
exports.getLoginerInfo = async (req, res, next) => {
    try {
        res.send("get /user")
    } catch (error) {
        next(error)
    }
}

// 更新用户
exports.updateUser = async (req, res, next) => {
    try {
        res.send("put /user")
    } catch (error) {
        next(error)
    }
}