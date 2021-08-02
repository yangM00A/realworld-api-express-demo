const express = require("express")
const router = express.Router()
const articlesController = require('../controller/articles')
const auth = require('../middleware/auth')
const validatorArticles = require('../validator/articles')

// 文章列表
router.get("/", articlesController.getArticlesList)

// 获取文章
router.get("/:articleId", validatorArticles.articleId, articlesController.getArticle)

// 添加文章
router.post("/", auth, validatorArticles.create, articlesController.addArticle)

// 更新文章
router.put("/:articleId", auth, validatorArticles.updateArticle, articlesController.updataArticle)

// 删除文章
router.delete("/:articleId", articlesController.deleteArticle)

// 给文章添加评论
router.post("/:articleId/comments", articlesController.addArticleCommon)

// 获取评论列表
router.get("/:articleId/comments", articlesController.getArticleCommon)

// 删除评论
router.delete("/:articleId/comments/:id", articlesController.deleteArticleCommon)



module.exports = router