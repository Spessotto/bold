const produtoController = new( require('../controllers/productController')) 

module.exports = function (app) {

    /**
     * @swagger
     * /products:
     *   get:
     *         tags:
     *         - product
     *         description: Return a list of products.
     *         security:
     *           - bearerAuth: []
     *         responses:
     *           200:
     *             description: sucess
     *             content: {}
     *           400:
     *             description: Error
     *             content: {}
     */
    app.get("/products", (req, res) => {
        produtoController.getProducts(req,res);
    })

}