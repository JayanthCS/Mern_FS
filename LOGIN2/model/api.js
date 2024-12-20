import express from "express";
let router = express.Router()
import formidable from "formidable";
import bodyParser from "body-parser";
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
import fs from "fs"
export default router;


import mysql from "mysql"

let connection=mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Jay@1234',
        database: 'information'
})

router.post("/register", (req, res, next) => {


    connection.connect()
    const form = formidable();

    form.parse(req, (err, fields, files) => {
        if (err) throw err;
       // res.json({fields,files})
       let file = files.image[0].filepath
        let new_file_path = "Images/" + files.image[0].originalFilename
        let qry_str = `INSERT INTO user_details(f_name,l_name,mobile_no,email,password,image) values('${fields.f_name}','${fields.l_name}','${fields.mobile_no}','${fields.email}','${fields.password}','${new_file_path}')`
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
