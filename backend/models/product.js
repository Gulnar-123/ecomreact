var mongoose = require("mongoose")
var productSchema = new mongoose.Schema({
    productid: String,
    productname: String,
    price: Number,
    productimage: String,
    description: String,
    type: String


})

var Product = mongoose.model('Product', productSchema)
module.exports = Product