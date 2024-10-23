// let express = require("express")
// let router = express.Router();


// router.get('/', (request, response) => {
//     response.send("Hello World!")
// })

// router.get('/about', (request, response) => {
//     response.send("About page")
// })

// router.get('/contact', (request, response) => {
//     response.send("Contact page")
// })

// module.exports = router




let express = require("express")
let router = express.Router()
module.exports = router;

router.get('/', (request, response) => {
    response.send("Home page....")
})

router.get('/contact', (request, response) => {
    response.send("Contact page....")
})