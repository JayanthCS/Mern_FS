let express = require("express")
let router = express.Router()


router.get('/', (request, response) => {
    response.send("Hello customer!")
})

router.get('/profile', (request, response) => {
    response.send("Your Profile..")
})

router.get('/purchases', (request, response) => {
    response.send("Purchase History..")
})

module.exports=router