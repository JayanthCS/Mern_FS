let express = require("express")
let router = express.Router()


router.get('/', (request, response) => {
    response.send("Hello Vendor!")
})

router.get('/profile', (request, response) => {
    response.send("This is your profile")
})

router.get('/product', (request, response) => {
    response.send("Manage your products")
})

module.exports=router