const express = require("express")
const router = express.Router()
const articlesController = require('../controller/articles')
const auth = require('../middleware/auth')

// 文章列表
router.get("/", auth, articlesController.getArticlesList)

// 获取文章
router.get("/:slug", articlesController.getArticle)

// 添加文章
router.post("/", articlesController.addArticle)

// 更新文章
router.put("/:slug", articlesController.updataArticle)

// 删除文章
router.delete("/:slug", articlesController.deleteArticle)

// 给文章添加评论
router.post("/:slug/comments", articlesController.addArticleCommon)

// 获取评论列表
router.get("/:slug/comments", articlesController.getArticleCommon)

// 删除评论
router.delete("/:slug/comments/:id", articlesController.deleteArticleCommon)



module.exports = router