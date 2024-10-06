let express = require("express")
let app = express()

let customer = require('./express_customer')
let vendor = require('./express_vendor')
let home = require('./express_home')


app.use('/home', home)
app.use('/customer', customer)
app.use('/vendor', vendor)

app.listen(3001, () => {
    console.log("you are connected to 3001 port!")
})



