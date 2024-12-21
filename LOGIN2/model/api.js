import express from "express";
let router = express.Router()
import formidable from "formidable";
import bodyParser from "body-parser";
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
import fs from "fs"
import bcrypt from "bcrypt";
export default router;


import mysql from "mysql"

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jay@1234',
    database: 'information'
})

router.post("/register", (req, res, next) => {


    connection.connect()
    const form = formidable();

    form.parse(req, async (err, fields, files) => {
        if (err) throw err;
        // res.json({fields,files})

        try {
            const password = fields.password.toString();
            let saltRounds = 10;
            let hashedPassword = await bcrypt.hash(password, saltRounds);

            let file = files.image[0].filepath
            let new_file_path = "Images/" + files.image[0].originalFilename
            // let file = files.image.filepath; // Access directly if it's not an array
            // let new_file_path = "Images/" + files.image.originalFilename;

            let qry_str = `INSERT INTO user_details(f_name,l_name,mobile_no,email,password,image) values('${fields.f_name}','${fields.l_name}','${fields.mobile_no}','${fields.email}','${hashedPassword}','${new_file_path}')`
            connection.query(qry_str, function (error, results, fields) {
                if (error) throw error;
                console.log(results);

                //  connection.end()

            });
            fs.copyFile(file, new_file_path, (error) => {
                if (error) throw error;
                console.log("file has been uploaded!!");
                res.send("File uploaded Successfully");
            });

        } catch (error) {
            console.error("Error during password hashing or database operation:", error);
            res.status(500).send("Server error.");
        } finally {
            connection.end();
        }
    });
})


// router.post("/login", urlencodedParser, function (req, res) {

//     let qry_str = `SELECT * FROM  user_details WHERE email='${req.body.email}' AND password='${hashedPassword}'`

//     connection.query(qry_str, function (error, results, fields) {
//         if (error) throw error;
//         console.log(results);
//     }
//     )

// })

router.post("/login", urlencodedParser, async (req, res) => {

    connection.connect()
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const qry_str = `SELECT * FROM user_details WHERE email = '${req.body.email}'`;

        // Query the database for the user by email
        connection.query(qry_str, [email], async (error, results) => {
            if (error) {
                console.error("Database error:", error);
                return res.status(500).json({ message: "Internal server error" });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            const user = results[0];

            // Compare the hashed password with the provided password
            const passwordMatches = await bcrypt.compare(password, user.password);

            if (passwordMatches) {
                // Successful login
                res.status(200).json({ message: "Login successful", user: { email: user.email, f_name: user.f_name } });
            } else {
                // Invalid credentials
                res.status(401).json({ message: "Invalid email or password" });
            }
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    } finally {
        connection.end(); // Close the connection after the request is handled
    }
});



// const jwt = require('jsonwebtoken');

// router.post("/login", urlencodedParser, async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ message: "Email and password are required" });
//         }

//         const qry_str = `SELECT * FROM user_details WHERE email = ?`;

//         connection.query(qry_str, [email], async (error, results) => {
//             if (error) {
//                 console.error("Database error:", error);
//                 return res.status(500).json({ message: "Internal server error" });
//             }

//             if (results.length === 0) {
//                 return res.status(401).json({ message: "Invalid email or password" });
//             }

//             const user = results[0];
//             const passwordMatches = await bcrypt.compare(password, user.password);

//             if (passwordMatches) {
//                 // Generate JWT
//                 const token = jwt.sign(
//                     { id: user.id, email: user.email },
//                     "your_jwt_secret_key",
//                     { expiresIn: "1h" }
//                 );

//                 res.status(200).json({ message: "Login successful", token });
//             } else {
//                 res.status(401).json({ message: "Invalid email or password" });
//             }
//         });
//     } catch (error) {
//         console.error("Error during login:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });























