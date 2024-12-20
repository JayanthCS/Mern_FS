// let express = require("express")
import  express  from "express";
let app = express()


import home from "./home.js"
import search from "./search.js"
import api from "./api.js"
// let home = require("./home")
// let search = require("./search")
// let api = require("./api")




app.use('/', home)
app.use('/search', search)
app.use('/api', api)



app.listen(3000, () => {
    console.log("listening to 3000 port!!");
})








