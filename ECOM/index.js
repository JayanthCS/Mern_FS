let express = require("express")
let app = express()

app.use("/Images", express.static(__dirname + "/Images"))

let customer = require("./customer")
let home = require("./home")
let api = require("./api")
let vendor = require("./vendor")
let product = require("./product")
//let register = require("./register")


app.use('/', home)
app.use('/customer', customer)
app.use('/api', api)
app.use('/vendor', vendor)
app.use('/product', product)
//app.use('/vendor', register)


app.listen(3000, () => {
    console.log("listening to 3000 port!!");
})
