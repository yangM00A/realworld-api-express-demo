const express = require("express")
const router = express.Router()

// 文章列表
router.get("/", async (req, res, next) => {
    try {
        res.send("get /api/articles")
    } catch (error) {
        next(error)
    }
})

// 获取文章
router.get("/:slug", async (req, res, next) => {
    try {
        res.send("get /api/articles/:slug")
    } catch (error) {
        next(error)
    }
})

// 添加文章
router.post("/", async (req, res, next) => {
    try {
        res.send("post /api/articles")
    } catch (error) {
        next(error)
    }
})

// 更新文章
router.put("/:slug", async (req, res, next) => {
    try {
        res.send("put /api/articles/:slug")
    } catch (error) {
        next(error)
    }
})

// 删除文章
router.delete("/:slug", async (req, res, next) => {
    try {
        res.send("delete /api/articles/:slug")
    } catch (error) {
        next(error)
    }
})

// 给文章添加comments
router.post("/:slug/comments", async (req, res, next) => {
    try {
        res.send("post /api/articles/:slug/comments")
    } catch (error) {
        next(error)
    }
})





module.exports = router