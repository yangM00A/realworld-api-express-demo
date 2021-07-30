const mongoose = require('mongoose');

const config = require('../config/config.default')

mongoose.connect(config.mongoDB);

var db = mongoose.connection;

db.on('error', err => {
    console.log('mongoDB数据库连接失败 ', err);
});
db.once('open', function() {
    console.log('mongoDB数据库连接成功 ');
});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


// 导出组织模型

module.exports = {
    User: mongoose.model('User', require('./user')),
    Articles: mongoose.model('Articles', require('./articles'))
}