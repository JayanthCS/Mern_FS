// let express = require("express")
import  express  from "express";
let router = express.Router()
// module.exports = router;
import path from 'path';  // You need to import 'path' for path manipulation
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);  // Get the filename of the current module
const __dirname = path.dirname(__filename);  // Get the directory name

export default router;


router.get('/', (request, response) => {
    response.sendFile(__dirname + "/view/search.html")
})

router.get('/serach', (request, response) => {
    response.send("This is search page")
})

