let express = require("express")
let router = express.Router()
module.exports = router;

router.get("/", (request, response) => {
    response.sendFile(__dirname+'/view/index.html')
})

router.get('/about', (request, response) => {
    response.sendFile(__dirname+'/view/about.html')
})
router.get('/contact', (request, response) => {
    response.sendFile(__dirname+'/view/contact.html')
})
router.get('/register', (request, response) => {
    response.sendFile(__dirname+'/view/register.html')
})
router.get('/login', (request, response) => {
    response.sendFile(__dirname+'/view/login.html')
})
