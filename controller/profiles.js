
// 获取用户资料
exports.getProfilefo = async (req, res, next) => {
    try {
        res.send("get /profiles/:username")
    } catch (error) {
        next(error)
    }
}

// 关注用户
exports.follow = async (req, res, next) => {
    try {
        res.send("post /profiles/:username/follow")
    } catch (error) {
        next(error)
    }
}

// 取消关注用户
exports.delFollow = async (req, res, next) => {
    try {
        res.send("delete /profiles/:username/follow")
    } catch (error) {
        next(error)
    }
}