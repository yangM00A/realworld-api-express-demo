const { Articles } = require('../model')

exports.getArticlesList = async (req, res, next) => {
    try {
        res.send("get /api/articles")
    } catch (error) {
        next(error)
    }
}


exports.getArticle = async (req, res, next) => {
    try {
        res.send("get /api/articles/:slug")
    } catch (error) {
        next(error)
    }
}

// 保存文章
exports.addArticle = async (req, res, next) => {
    try {
        const articles = new Articles(req.body.article)
        articles.author = req.user
        await articles.save()
        res.status(201).json(articles)
    } catch (error) {
        next(error)
    }
}


exports.updataArticle = async (req, res, next) => {
    try {
        res.send("put /api/articles/:slug")
    } catch (error) {
        next(error)
    }
}


exports.deleteArticle = async (req, res, next) => {
    try {
        res.send("delete /api/articles/:slug")
    } catch (error) {
        next(error)
    }
}


exports.addArticleCommon = async (req, res, next) => {
    try {
        res.send("post /api/articles/:slug/comments")
    } catch (error) {
        next(error)
    }
}

exports.getArticleCommon = async (req, res, next) => {
    try {
        res.send("get /api/articles/:slug/comments")
    } catch (error) {
        next(error)
    }
}

exports.deleteArticleCommon = async (req, res, next) => {
    try {
        res.send("delete /api/articles/:slug/comments/:id")
    } catch (error) {
        next(error)
    }
}