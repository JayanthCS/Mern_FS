let express = require("express")
let router = express.Router()
module.exports = router;

router.get("/", (request, response) => {
    response.sendFile(__dirname+'/view/index.html')
})
router.get('/search', (request, response) => {
    response.sendFile(__dirname+'/view/search.html')
})
router.get('/register', (request, response) => {
    response.sendFile(__dirname+'/view/register.html')
})
