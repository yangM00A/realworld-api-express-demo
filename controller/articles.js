const { Articles, User } = require('../model')

exports.getArticlesList = async (req, res, next) => {
    try {
        const { limit = 20, offset = 0, tag, author } = req.query
        //skip: 跳过的条数
        //limit: 查询的条数
        // sort： -1 倒序，1：正序
        const tagObj = {}
        if (tag) {
            // 标签条件
            tagObj.tagList = tag
        }

        // 作者
        if (author) {
            const user = await User.findOne({ username: author })
            if (user) {
                tagObj.author = user._id
            }
        }
        const articlesList = await Articles.find(tagObj).skip(Number.parseInt(offset)).limit(Number.parseInt(limit)).sort({ createdAt: -1 })
        res.status(201).json(articlesList)
    } catch (error) {
        next(error)
    }
}

// 根据文章id查询文章
exports.getArticle = async (req, res, next) => {
    try {
        // populate 顺便查询出作者
        const article = await Articles.findById(req.params.articleId).populate('author')
        if (article) {
            res.status(201).json(article)
        } else {
            res.status(404).end()
        }
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

// 更新文章
exports.updataArticle = async (req, res, next) => {
    try {
        // 数据库查询出的article
        const article = req.article
        // article参数
        const bodyArticle = req.body.article
        // 合并
        article.title = bodyArticle.title || article.title;
        article.description = bodyArticle.description || article.description;
        article.body = bodyArticle.body || article.body;
        // 保存
        article.save()
        res.json(article)
    } catch (error) {
        next(error)
    }
}


exports.deleteArticle = async (req, res, next) => {
    try {
        const article = req.article
        article.remove()
        res.status(204).end()
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