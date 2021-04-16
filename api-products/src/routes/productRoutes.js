const productController = new( require('../controllers/productController')) 

module.exports = function (app) {

    app.get("/products", (req, res) => {
        productController.getProducts(req,res);
    })

    app.post("/products", (req, res) => {
        productController.insertProduct(req,res);
    })

}