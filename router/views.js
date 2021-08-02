const express = require("express")
const router = express.Router()


router.get('/index',(req,res)=>{
    res.render('index.art',{
        title:"hello world3"
    })
})

module.exports.viewRouter = router