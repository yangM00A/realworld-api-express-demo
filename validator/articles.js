const { body, param } = require('express-validator')
const mongoose = require('mongoose')
const validatorHandle = require('../middleware/validator')
const { Articles } = require('../model')


// 添加文章校验
exports.create = validatorHandle([
    body("article.title").notEmpty().withMessage("文章标题不能为空"),
    body("article.body").notEmpty().withMessage("文章内容不能为空"),
    body("article.description").notEmpty().withMessage("文章描述不能为空")
])

// 文章id类型校验
exports.articleId = validatorHandle([
    param("articleId").custom(value => {
        const isObjectId = mongoose.isValidObjectId(value)
        if (isObjectId) {
            return Promise.resolve()
        }
        return Promise.reject('文章id类型错误')
    })
])

// 校验文章id类型
// 校验文章是否存在
// 验证文章作者是当前登录用户
exports.updateArticle = [
    validatorHandle([
        validatorHandle.isValidObjecId('params', 'articleId')
    ]),
    async (req, res, next) => {
            const articleId = req.params.articleId
            const article = await Articles.findById(articleId)
            req.article = article
            if (!article) {
                res.status(404).end()
            }
            next()
    },
    async (req, res, next) => {
        if (req.user._id.toString() != req.article.author.toString()) {
            res.status(403).end()
        }
        next()
    },
]