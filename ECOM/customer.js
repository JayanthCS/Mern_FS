let express = require("express")
let router = express.Router()
module.exports = router;

router.get('/', (request, response) => {
    response.sendFile(__dirname + "/view/product_list.html")
})

router.get('/profile', (request, response) => {
    response.send("customer Profile page....")
})

