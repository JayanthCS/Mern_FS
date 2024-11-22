let express = require("express")
let router = express.Router()
module.exports = router;

router.get('/', (request, response) => {
    response.send("Product Home page....")
})

router.post('/upload', (request, response) => {
    response.send("uploading")
})
router.put('/modify:id', (request, response) => {
    response.send("modifying")
})
router.delete('/delete:id', (request, response) => {
    response.send("deleting")
})
