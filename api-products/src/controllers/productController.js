const productService = new(require('../services/productService'));

class productController {

    async getProducts(req, res) {        
        let products = await productService.getProducts();
        res.status(200).json({ products: products})
    }

    async insertProduct(req, res) { 
        let data= {
            name: req.body.name,
            price:  req.body.price
        }

        let product = await productService.insertProduct(data);
        res.status(201).send(product)
    }

}

module.exports = productController;