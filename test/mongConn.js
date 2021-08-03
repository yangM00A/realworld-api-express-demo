const mongoose = require('mongoose')
const config = require('../config/config.default')

mongoose.connect(config.mongoDB)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongoDB数据库连接成功');
});


module.exports.mongoose = mongoose