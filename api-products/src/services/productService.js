const productRepository = new (require('../repositories/productRepository'));

class productService {

    async getProducts() {
        let products = await productRepository.getProducts();
        return products;
    }

    async insertProduct(data) {
        let product = await productRepository.insertProduct(data);
        return product;
    }

}

module.exports = productService;