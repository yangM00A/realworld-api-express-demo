const {mongoose} = require('./mongConn')

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

console.log(person.save());