let express = require("express")
let router = express.Router()
module.exports = router;

router.get('/', (request, response) => {
    response.sendFile(__dirname+"/view/product_list.html")
})

router.get('/details/:id', (request, response) => {
    response.sendFile(__dirname+"/view/product_details.html")
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
