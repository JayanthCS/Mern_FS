// const jwt = require("jsonwebtoken")
import  jwt  from "jsonwebtoken";

const payload = { userId: 123, userName: "Jayanth" }
const secretkey = "Jay@1234";
const option = { expiresIn: "1h" }

let token = jwt.sign(payload, secretkey, option);
console.log("generate token:", token)





token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlck5hbWUiOiJKYXlhbnRoIiwiaWF0IjoxNzM0NTIxMTg2LCJleHAiOjE3MzQ1MjQ3ODZ9.2ENaH5Y-nWMgt7sqMxcLUfU7S5rzhWrqW7DVlBrRhqI"

try {
    const decode = jwt.verify(token, secretkey)
    console.log("decoded payload:", decode)
} catch (error) {
    console.error("invalid token:", error.message)
}


// const decode = jwt.decode(token)
// console.log("Decode withot verification:", decode);










