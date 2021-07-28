const express = require("express")
const router = express.Router()
const articlesController = require('../controller/articles')

// 文章列表
router.get("/", articlesController.getArticlesList)

// 获取文章
router.get("/:slug", articlesController.getArticle)

// 添加文章
router.post("/", articlesController.addArticle)

// 更新文章
router.put("/:slug", articlesController.updataArticle)

// 删除文章
router.delete("/:slug", articlesController.deleteArticle)

// 给文章添加comments
router.post("/:slug/comments", articlesController.addArticleCommon)



module.exports = router