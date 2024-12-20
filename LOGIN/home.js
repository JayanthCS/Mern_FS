// let express = require("express")
import  express  from "express";
let router = express.Router()
// module.exports = router;
import path from 'path';  // You need to import 'path' for path manipulation
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);  // Get the filename of the current module
const __dirname = path.dirname(__filename);  // Get the directory name

export default router;

router.get("/", (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname+'/view/index.html')
})
router.get('/search', (request, response) => {
    response.sendFile(__dirname+'/view/search.html')
})
router.get('/register', (request, response) => {
    response.sendFile(__dirname+'/view/register.html')
})
