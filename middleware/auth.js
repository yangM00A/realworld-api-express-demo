// 认证token

const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
    const token = req.headers.authentication
    if (token) {
        // token 存在
        try {
            // 1.校验token是否有效
            const tokenInfo = await jwt.verify(token, jwtSecret)
            // 查询用户信息
            const user = await User.findById(tokenInfo.id)
            req.user = user
            next()
        } catch (error) {
            // token无效
            res.status(401).send()
        }

    } else {
        // 不存在
        res.status(401).send()
    }
}