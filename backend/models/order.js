var mongoose = require("mongoose")
var orderSchema = new mongoose.Schema({
    emailid: String,
    productid: String,
    qty: Number,
    amt: Number,
    orderno: Number


})

var Order = mongoose.model('Order', orderSchema)
module.exports = Order