import express, { response } from "express";
let router = express.Router()
import formidable from "formidable";
import bodyParser from "body-parser";
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
import fs from "fs"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
export default router;


import mysql from "mysql"


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jay@1234',
    database: 'information'
})

router.post("/register", urlencodedParser, (req, res, next) => {
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
            // let token = jwt.sign(
            //     { email: fields.email, mobile_no: fields.mobile_no },
            //     "your_jwt_secret_key",
            //     { expiresIn: "1h" }
            // );


            let qry_str = `INSERT INTO user_details(f_name,l_name,mobile_no,email,password,image) values('${fields.f_name}','${fields.l_name}','${fields.mobile_no}','${fields.email}','${hashedPassword}','${new_file_path}')`;
            connection.query(qry_str, function (error, results, fields) {
                if (error) throw error;
                console.log(results);


                //   console.log("Generated JWT Token:", token); // Log the token to the console

                //  connection.end()

            });
            fs.copyFile(file, new_file_path, (error) => {
                if (error) throw error;
                console.log("file has been uploaded!!");
                res.send("Registerd Successfully");
            });

        } catch (error) {
            console.error("Error during password hashing or database operation:", error);
            res.status(500).send("Server error.");
        } finally {
            connection.end();
        }
    });
})



router.post("/login", urlencodedParser, async (req, res) => {
    //connection.connect(); // Connect to the database
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Email and password are required" });
        }

        const qry_str = `SELECT * FROM user_details WHERE email = ?`;

        connection.query(qry_str, [email], async (error, results) => {
            if (error) {
                console.error("Database error:", error);
                return res.status(500).json({ success: false, error: "Internal server error" });
            }

            if (results.length === 0) {
                return res.status(401).json({ success: false, error: "Invalid email or password" });
            }

            const user = results[0];

            // Compare the hashed password with the user-entered password
            const passwordMatches = await bcrypt.compare(password, user.password);

            let token = jwt.sign(
                {email },
                "your_jwt_secret_key",
                { expiresIn: "1h" }
            );

            console.log("Token:", token)

            if (passwordMatches) {

                // Send all user details (excluding sensitive data like password)
                res.status(200).json({
                    success: true,
                    user: {
                        Id: user.Id,
                        f_name: user.f_name,
                        l_name: user.l_name,
                        email: user.email,
                        mobile_no: user.mobile_no,
                        image: user.image || "default.jpg", // Default profile picture if none exists
                    },

                });

            } else {
                res.status(401).json({ success: false, error: "Invalid email or password" });
            }
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


router.get("/user/:Id", (req, res) => {
    const userId = req.params.Id;

    const qry_str = `SELECT * FROM user_details WHERE Id = ?`;
    connection.query(qry_str, [userId], (error, results) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({ success: false, error: "Internal server error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        const user = results[0];
        res.status(200).json({
            success: true,
            user: {
                Id: user.Id,
                f_name: user.f_name,
                l_name: user.l_name,
                email: user.email,
                mobile_no: user.mobile_no,
                image: user.image || "default.jpg",
            },
        });
    });
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
// const token = jwt.sign(
//     { id: user.id, email: user.email },
//     "your_jwt_secret_key",
//     { expiresIn: "1h" }
// );

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























