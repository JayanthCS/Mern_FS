// let express = require("express")
// let router = express.Router()


// router.get('/', (request, response) => {
//     response.send("Hello customer!")
// })

// router.get('/profile', (request, response) => {
    
//     response.send("Your Profile..")
// })

// router.get('/purchases', (request, response) => {
//     response.send("Purchase History..")
// })

// module.exports=router


let express = require("express")
let router = express.Router()
module.exports = router;

router.get('/', (request, response) => {
    response.send("customer Home page....")
})

router.get('/profile', (request, response) => {
    response.send("customer Profile page....")
})

