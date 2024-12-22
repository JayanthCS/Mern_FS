import express from "express";
let app = express()
import path from 'path';  // You need to import 'path' for path manipulation
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);  // Get the filename of the current module
const __dirname = path.dirname(__filename);  // Get the directory name



import home from "./controller/home.js"
import login from "./controller/login.js"
import api from "./model/api.js"


app.use(express.static(path.join(__dirname, 'view')));
app.use("/Images", express.static(__dirname + "/Images"))
// app.use(express.static('public'));
app.use('/', home)
app.use('/login', login)
app.use('/api', api)

app.get('/user_details.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'user_details.html'));
});


app.listen(3000, () => {
    console.log("listening to 3000 port!!");
})

