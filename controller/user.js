const { User } = require('../model')
// 登录
exports.userLogin = async (req, res, next) => {
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

// 注册
exports.userRegister = async (req, res, next) => {
    try {
        res.send("post /users")
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