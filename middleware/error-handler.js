const util = require('util')

// 异常处理函数
module.exports = function() {
    return function(err, req, res, next) {
        res.status(500).json({
            error: util.format(err)
        })
    }

}