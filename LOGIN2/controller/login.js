// let express = require("express")
// let router = express.Router()

// module.exports = router;


import express from "express";
let router = express.Router()
// module.exports = router;
import path from 'path';  // You need to import 'path' for path manipulation
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);  // Get the filename of the current module
const __dirname = path.dirname(__filename);  // Get the directory name

export default router;


router.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, '../view/login.html'));
    //response.sendFile(__dirname, '../view/product_list.html')
})



// router.get('/login', (request, response) => {
//     response.sendFile(__dirname, '../view/login.html')
// })









