const CustomException = require("../utils/customException");
const cartRepository = new (require('../repositories/cartRepository'));

class cartService {

    async getCart(userId) {
        let cartDB = await cartRepository.getCart(userId);

        let cart = {
            shoppingCartId: cartDB.codigo,
            userId: cartDB.cod_user
        }

        let products = [];
        cartDB.produtocarrinhos.forEach(element_product => {
            let produto = {
                productid: element_product.cod_product,
                price: element_product.price,
                quantity: element_product.quantity
            }
            products.push(produto);
        });

        cart.totalPrice = products.reduce((total,element) => total + element.price,0);
        cart.totalQuantity = products.length;
        cart.products = products;
        return cart;
    }

    async insertProductCart(data) {
        await cartRepository.insertProductCart(data);
        return;
    }

    async removeProductCart(data) {
        let deletedProduct = await cartRepository.removeProductCart(data);
        return deletedProduct;
    }

}

module.exports = cartService;