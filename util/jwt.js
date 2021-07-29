const jwt = require('jsonwebtoken');
const promisify = require('util').promisify

// 生成token
exports.sign = promisify(jwt.sign)

// 解析token
exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)

// jwt.sign(payload, secretOrPrivateKey, [options, callback])
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// console.log(token);

// jwt.verify(token, secretOrPublicKey, [options, callback])
// jwt.verify(token, 'shhhhh', (err, result) => {
//     if (err) {
//         console.log("验证失败");
//     } else {
//         console.log(result);
//     }
// })