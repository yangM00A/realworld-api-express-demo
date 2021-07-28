const express = require('express')
const router = express.Router()

const profilesController = require('../controller/profiles')

// 获取用户资料
router.get('/:username', profilesController.getProfilefo)

// 关注用户
router.post('/:username/follow', profilesController.follow)

// 取消关注用户
router.delete('/:username/follow', profilesController.delFollow)

module.exports = router