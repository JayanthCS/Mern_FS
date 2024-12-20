import  express  from "express";
let router = express.Router()

import path from 'path';  // You need to import 'path' for path manipulation
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);  // Get the filename of the current module
const __dirname = path.dirname(__filename);  // Get the directory name


export default router;



router.get('/', (req, response) => {
//    console.log(__dirname)
//    console.log(__filename)
   response.sendFile(path.join(__dirname, '../view/index.html'));
});
router.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, '../view/login.html'));
})
router.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname, '../view/register.html'));
})