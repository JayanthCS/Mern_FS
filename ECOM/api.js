let express = require("express")
let router = express.Router()
var bodyParser = require("body-parser")
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let formidable = require("formidable")
let fs = require("fs")


var mysql = require('mysql');
const { error } = require("console")
const { ifError } = require("assert")
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jay@1234',
    database: 'details'
});

router.post("/register", urlencodedParser, function (req, res) {

    connection.connect()
    let qry_str = `INSERT INTO info(name,email,password) values('${req.body.firstname}','${req.body.email}','${req.body.password}')`
    if (req.body.customer_type == "vendor") {
        qry_str = `INSERT INTO vendor(name,email,password) values('${req.body.firstname}','${req.body.email}','${req.body.password}')`
    }
    connection.query(qry_str, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
    connection.end();

    res.send('Hi, ' + req.body.firstname + '<br> you have been successfully Registerd')
})




router.post("/login", urlencodedParser, function (req, res) {


    console.log("req.body.customer_type==>", req.body.customer_type, req.body.password)
    let qry_str = `SELECT name FROM info  WHERE email='${req.body.email}' AND password='${req.body.password}'`

    if (req.body.customer_type == "vendor") {
        qry_str = `SELECT name FROM vendor  WHERE email='${req.body.email}' AND password='${req.body.password}'`
    }
    connection.query(qry_str, function (error, results, fields) {
        if (error) res.send('invalid Credentials!!');
        console.log(results);
        if (!results.length) {
            res.send('invalid Credentials!!');
        }
        else {
            if (req.body.customer_type == 'vendor') {
                res.redirect('/vendor')
            } else {
                res.redirect('/customer')
            }
        }

    });

})


router.post("/add_product", (req, res, next) => {
    const form = formidable.formidable({});

    form.parse(req, (err, fields, files) => {
        if (err) throw err;
        file = files.image[0].filepath
        new_file_path = "Images/" + files.image[0].originalFilename
        let qry_str = `INSERT INTO product(p_name,price,quantity,description,image) values('${fields.product_name}','${fields.price}','${fields.quantity}','${fields.description}','${new_file_path}')`
        connection.query(qry_str, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
        connection.end();
        fs.copyFile(file, new_file_path, (error) => {
            if (error) throw error;
            console.log("file has been uploaded!!");
            res.send("File uploaded Successfully");
        });

    });
});


router.get("/get_product", (req, res, next) => {
    let qry_str = `SELECT * FROM product;`
    connection.query(qry_str, (error, results, field) => {
        if (error) throw error;
        res.send(JSON.stringify(results))
    })
})

router.get("/get_product/:id", (req, res, next) => {
    let qry_str = `SELECT * FROM product WHERE Id=${req.params.id};`
    connection.query(qry_str, (error, results, field) => {
        if (error) throw error;
        res.send(JSON.stringify(results))
    })
})

module.exports = router












// let mysql = require("mysql")

// let connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "databaseName"
// })

// connection.connect()

// connection.end()




