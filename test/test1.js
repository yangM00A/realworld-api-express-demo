const mongoose = require('mongoose')
const config = require('../config/config.default')


mongoose.connect(config.mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongoDB数据库连接成功');
});

// 1.创建schema
const personSchema = mongoose.Schema({
    name: String,
    age: Number
})

// 2.将schema 装换成 model对象
const PersonModel = mongoose.model('person', personSchema)

// 操作
let obj = {
    name: "张三",
    age: 30
}
const person = new PersonModel(obj)

person.save()