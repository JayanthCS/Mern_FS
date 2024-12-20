// let express = require("express")
import  express  from "express";
let router = express.Router()
// var bodyParser = require("body-parser")
import  bodyParser  from "body-parser";
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// module.exports = router;
export default router;

// let mysql = require("mysql")

import mysql from "mysql"
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jay@1234',
    database: 'user_info'
});

router.post("/register", urlencodedParser, function (req, res) {
    connection.connect()

    let qry_str = `INSERT INTO user_entry(f_name,l_name,Age,mobile_no,email,password) values ('${req.body.fname}','${req.body.lname}','${req.body.age}','${req.body.mobile_num}','${req.body.email}','${req.body.password}')`
    connection.query(qry_str, function (error, result, field) {
        if (error) throw error;
    })
    connection.end()
    res.send('Hi, ' + req.body.fname + '<br> you have been successfully Registerd')
})


router.get("/get_info", function (req, res) {
   // connection.connect()
    let qry_str = `SELECT * FROM user_entry`
    connection.query(qry_str, function (error, result, field) {
        if (error) throw error;
        res.send(JSON.stringify(result))
    })
   
   // connection.end()
   
})








