let express = require("express")
let router = express.Router()


router.get('/', (request, response) => {
    response.sendFile(__dirname+"/view/add_product.html")
})

router.get('/profile', (request, response) => {
    response.send("Vendor Profile page....")
})
router.get('/my_products', (request, response) => {
    response.send("Here is the list of products..")
})


module.exports = router;