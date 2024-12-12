let express = require("express")
let app = express()



let home = require("./home")
let search = require("./search")
let api = require("./api")




app.use('/', home)
app.use('/search', search)
app.use('/api', api)



app.listen(3000, () => {
    console.log("listening to 3000 port!!");
})








