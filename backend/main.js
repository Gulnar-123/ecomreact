var cn = require("./db")
var User = require("./models/user")
var express = require("express")
var parser = require("body-parser")
var cors = require("cors")
var Admin = require("./models/admin")
var multer = require("multer")
var fs = require("fs")
const upload = multer({ dest: 'tmp' });
var app = express()
app.use(express.static('public'));
app.use(cors({ credentials: true }))
var ue = parser.urlencoded({ extended: true })
app.use(parser.json())
var products = require("./models/product")
var Cart = require("./models/cart")
var orders = require("./models/order")
app.post('/createuser', ue, (req, res) => {
    var record = {
        name: req.body.name, address: req.body.address,
        contact: req.body.contact, email: req.body.email, password: req.body.password
    }
    User.create(record).then(() => {
        res.json({ 'message': 'Registration Successful' })
    }).catch(() => {
        res.json({ 'message': 'Problem Occured' })
    })
})

app.get("/login/:em/:ps", (req, res) => {
    User.findOne({ email: req.params.em, password: req.params.ps }).then((record) => {
        res.json(record)
    }).catch(() => {
        res.json({ 'message': 'problem occured' })
    })
})
app.get("/alogin/:em/:ps", (req, res) => {
    Admin.findOne({ email: req.params.em, password: req.params.ps }).then((record) => {
        res.json(record)
    }).catch(() => {
        res.json({ 'message': 'problem occured' })
    })
})
app.post("/addproduct", upload.single('file'), function (req, res) {
    if (req.file) {
        fs.readFile(req.file.path, function (err, data) {
            fs.writeFile(__dirname + "/public/" + req.file.originalname, data, function (err) {

                if (err)
                    res.json({ "message": "FIle not Uploaded" })
                else {
                    var rec = { productid: req.body.productid, productname: req.body.productname, price: req.body.price, productimage: req.file.originalname, description: req.body.description, type: req.body.type }
                    products.create(rec).then((docs) => {
                        res.json({ "message": "Product Uploaded" })
                    })
                }
            })


        })
    }

})
app.get("/getproducts/:type", (req, res) => {
    products.find({ 'type': req.params.type }).then((records) => {
        res.json(records)
    })
})
app.get("/searchproduct/:pid", (req, res) => {
    products.findOne({ productid: req.params.pid }).then((record) => {
        res.json(record)
    })
})
app.post("/addcart", ue, (req, res) => {
    var record = { emailid: req.body.emailid, productid: req.body.productid, qty: req.body.qty, amt: req.body.amt }
    Cart.create(record).then(() => {
        res.json({ 'message': 'Product Added to Cart' })
    })
})
var cartproducts = []
app.get("/getcart/:em", (req, res) => {

    Cart.find({ emailid: req.params.em }).then(records => {

        records.map(row => {
            products.findOne({ productid: row.productid }).then((rec) => {

                cartproducts.push({
                    productimage: rec.productimage, productid: rec.productid,
                    productname: rec.productname, price: rec.price, qty: row.qty, amt: row.amt, emailid: row.emailid
                })
            })

        })

        res.json(cartproducts)

        cartproducts = []
    })
})

app.post("/addorder", ue, (req, res) => {
    var record = { emailid: req.body.emailid, productid: req.body.productid, qty: req.body.qty, amt: req.body.amt, orderno: req.body.orderno }

    orders.create(record).then((records) => {
        Cart.deleteMany({ emailid: req.body.emailid })


    })

})
var orderproducts = []
app.get("/getorder/:em", (req, res) => {

    orders.find({ emailid: req.params.em }).sort({ orderno: 1 }).then(records => {

        records.map(row => {
            products.findOne({ productid: row.productid }).then((rec) => {

                orderproducts.push({
                    productimage: rec.productimage, productid: rec.productid,
                    productname: rec.productname, price: rec.price, qty: row.qty, amt: row.amt, emailid: row.emailid, orderno: row.orderno
                })
            })

        })

        res.json(orderproducts)

        orderproducts = []
    })
})

app.get("/getono", (req, res) => {
    orders.find({}, { orderno: 1 }).distinct("orderno").then((response) => {
        res.json(response)
    })
})
var orderproducts1 = []
app.get("/getorderdetails/:ono", (req, res) => {
    orders.find({ orderno: req.params.ono }).then(records => {

        records.map(row => {
            products.findOne({ productid: row.productid }).then((rec) => {

                orderproducts1.push({
                    productimage: rec.productimage, productid: rec.productid, productname: rec.productname, price: rec.price, qty: row.qty, amt: row.amt, emailid: row.emailid, orderno: row.orderno
                })
            })

        })
        res.json(orderproducts1)
        console.log(orderproducts1)
        orderproducts1 = []
    })

})
app.listen(9000, () => {
    console.log("server started at http://localhost:9000")
})