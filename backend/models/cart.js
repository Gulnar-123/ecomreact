var mongoose = require("mongoose")
var cartSchema = new mongoose.Schema({
    emailid: String,
    productid: String,
    qty: Number,
    amt: Number


})

var Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart