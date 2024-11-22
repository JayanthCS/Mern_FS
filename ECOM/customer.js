let express = require("express")
let router = express.Router()
module.exports = router;

router.get('/', (request, response) => {
    response.send("customer Home page....")
})

router.get('/profile', (request, response) => {
    response.send("customer Profile page....")
})

