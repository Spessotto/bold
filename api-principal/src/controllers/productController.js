const productService = new(require('../services/productService'));

class productController {

    async getProducts(req, res) {        
        let products = await productService.getProducts();
        res.status(200).json(products)
    }

}

module.exports = productController;