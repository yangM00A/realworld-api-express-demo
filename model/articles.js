const mongoose = require('mongoose')
const baseModel = require('./base-model')

const articlesSchema = new mongoose.Schema({
    slug: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    },
    tagList: {
        type: [String],
        default: null
    },
    favoritesCount: {
        type: Number,
        default: 0
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    ...baseModel
})

module.exports = articlesSchema