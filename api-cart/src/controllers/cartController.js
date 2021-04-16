const CustomException = require("../utils/customException");
const cartService = new (require('../services/cartService'));

class cartController {

    async getCart(req, res) {
        try {
            let userId = req.params.userId;
            let cart = await cartService.getCart(userId);
            res.status(200).json(cart);
        } catch (error) {
            res.status(error.code).json(error.message);
        }
    }

    async insertProductCart(req, res) {
        try {
            let data = {
                shoppingCartId: req.body.shoppingCartId,
                productId: req.body.productId,
                price: req.body.price,
                quantity: req.body.quantity
            }

            await cartService.insertProductCart(data);
            res.status(201).send("Product added!");
        } catch (erro) {
            res.status(erro.code).json(erro.message);
        }
    }

    async removeProductCart(req, res) {
        try {
            let data = {
                shoppingCartId: req.body.shoppingCartId,
                productId: req.body.productId
            }

            let deletedProduct = await cartService.removeProductCart(data);
            if(deletedProduct > 0){
                res.status(200).send("Product deleted!");
            }else {
                res.status(404).send("Product not found!");
            }
            

        } catch (error) {
            res.status(error.code).json(error.message);
        }
    }

}

module.exports = cartController;