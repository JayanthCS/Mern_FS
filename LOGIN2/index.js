import  express  from "express";
let app = express()



import home from "./controller/home.js"
import login from "./controller/login.js"
import api from "./model/api.js"


// app.use(express.static('public'));
app.use('/', home)
app.use('/login', login)
app.use('/api', api)

app.listen(3000, () => {
    console.log("listening to 3000 port!!");
})

