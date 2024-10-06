let express = require("express")
let router = express.Router();


router.get('/', (request, response) => {
    response.send("Hello World!")
})

router.get('/about', (request, response) => {
    response.send("About page")
})

router.get('/contact', (request, response) => {
    response.send("Contact page")
})

module.exports = router

