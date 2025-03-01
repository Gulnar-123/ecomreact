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
app.listen(9000, () => {
    console.log("server started at http://localhost:9000")
})