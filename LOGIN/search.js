let express = require("express")
let router = express.Router()
module.exports = router;

router.get('/', (request, response) => {
    response.sendFile(__dirname + "/view/search.html")
})

router.get('/serach', (request, response) => {
    response.send("This is search page")
})

