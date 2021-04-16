const cartService = new (require('../services/cartService'));

class cartController {

    async getCart(req, res) {
        try {
            let userId = req.params.userId;
            let cart = await cartService.getCart(userId);
            res.status(200).json(cart)
        } catch (error) {
            res.status(error.code).json(error.message);
        }
    }

    async insertProductCart(req, res) {
        try {
            let data = req.body;
            let productCart = await cartService.insertProductCart(data);
            res.status(201).json(productCart)
        } catch (error) {
            res.status(error.code).json(error.message);
        }
    }

    async deleteProductCart(req, res) {
        try {
            let data = req.body;
            let productCart = await cartService.deleteProductCart(data);
            res.status(200).json(productCart)
        } catch (error) {
            res.status(error.code).json(error.message);
        }
    }

}

module.exports = cartController;