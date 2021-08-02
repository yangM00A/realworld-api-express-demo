const express = require('express')
const router = express.Router()

const { userRouter } = require('./user')
const profiles = require('./profiles')
const articles = require('./articles')
const tags = require('./tags')
const {viewRouter} = require('./views')


// 用户路由
router.use(userRouter)
// 用户资料
router.use("/profiles", profiles)
// 文章路由
router.use("/articles", articles)
// 标签路由
router.use("/tags", tags)

// 页面路由
router.use('/views',viewRouter)

module.exports = router