// const express = require("express")
// const jwt = require("jsonwebtoken")
// const app = express()
// const port = 3000

// app.get("/", (req, res) => {
//     res.send("Home page")
// })

// app.get("/about", (req, res) => {
//     res.sendFile(__dirname + '/login.html')
// })


// const payload = { }
// const secretkey = "Jay@1234"
// const option = { expiresIn: '1h' }

// const token = jwt.sign(payload, secretkey, option)
// console.log(token)




// app.listen(port)

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve HTML file
app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Handle login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Validate credentials (this is just a basic example; replace with real validation)
    if (username === username && password === password) {
        const payload = { username };
        const secretkey = "Jay@1234";
        const option = { expiresIn: "1s" };
        const token = jwt.sign(payload, secretkey, option);
        res.json({ message: "Login successful", token });

        const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpheWFudGgiLCJpYXQiOjE3MzQ1MjU5OTEsImV4cCI6MTczNDUyNTk5Mn0.UYmD5MyOFwES65qshHcH8kXhTaNVqGPtx35QKwNC7NI"
        try {
            const decode = jwt.verify(tok, secretkey)
            console.log("decoded payload:", decode)
        } catch (error) {
            console.error("Invalid token:", error.message)
        }

        // const decode = jwt.decode(token)
        // console.log("decode without verification:", decode)
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Home page");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

