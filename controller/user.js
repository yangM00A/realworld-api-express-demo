// 登录
exports.userLogin = async (req, res, next) => {
    try {
        res.send("post /users/login")
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