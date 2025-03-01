var mongoose = require("mongoose")
var cn = mongoose.connect("mongodb://localhost:27017/ecomdb").then(() => {
    console.log("connected to mongodb")
})
module.exports = cn