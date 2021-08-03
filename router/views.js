const express = require("express")
const router = express.Router()
// 页面路由

// 首页
router.get('/', (req, res) => {
    let list = [{
            username: "Tom",
            age: 18,
            address: "广州"
        },
        {
            username: "Amy",
            age: 10,
            address: "合肥"
        }, {
            username: "Jack",
            age: 16,
            address: "郑州"
        }
    ]
    res.render('index.art', {
        title: "首页",
        list: list
    })
})

// 
router.get('/Home', (req, res) => {
    res.render('index.art', {
        title: "Home"
    })
})

module.exports.viewRouter = router