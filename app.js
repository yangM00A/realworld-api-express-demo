const express = require('express')
const chalk = require('chalk')
const morgan = require('morgan')
const cors = require('cors')

const router = require('./router')
const conf = require('./config/config.default')
const errorHandler = require('./middleware/error-handler')

const app = express()

// 中间件--请求数据处理
app.use(express.json())
app.use(express.urlencoded())

// 中间件--日志
app.use(morgan('dev'))

// 中间件-跨域处理
app.use(cors())

// 中间件-router
app.use("/api",router)

// 中间件-异常处理
app.use(errorHandler())


app.listen(conf.PORT, () => {
    const addr = `http://localhost:${conf.PORT}`
    console.log(`启动成功 访问地址 ${chalk.green(addr)}`);
})