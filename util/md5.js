const crypto = require("crypto")
// md5 加密

// console.log(crypto.createHash("md5").update("hello").digest("hex"));

module.exports = (cryptoStr) => {
    // 混淆字符串
    const mixStr = "yangmeng"
    return crypto.createHash("md5").update(`${cryptoStr}${mixStr}`).digest("hex")
}