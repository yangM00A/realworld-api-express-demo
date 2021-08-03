const express = require('express')
const chalk = require('chalk')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const router = require('./router')
const conf = require('./config/config.default')
const errorHandler = require('./middleware/error-handler')
const {viewRouter} = require('./router/views')


const app = express()

// art-template
app.engine('art', require('express-art-template'));
app.set('view options', { debug: process.env.NODE_ENV !== 'production' });
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');


// 静态资源处理
app.use("/static", express.static(path.join(__dirname, './static')))
app.use("/node_modules", express.static(path.join(__dirname, './node_modules')))

// 中间件--请求数据处理
app.use(express.json())
app.use(express.urlencoded())

// 中间件--日志
app.use(morgan('dev'))

// 中间件-跨域处理
app.use(cors())

// 页面路由
app.use(viewRouter)

// 中间件-router 一般是api接口
app.use("/api",router)

// 中间件-异常处理
app.use(errorHandler())


app.listen(conf.PORT, () => {
    const addr = `http://localhost:${conf.PORT}`
    console.log(`启动成功 访问地址 ${chalk.green(addr)}`);
})