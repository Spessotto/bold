const cartController = new (require('../controllers/cartController'))

module.exports = function (app) {

    /**
     * @swagger
     * /cart/{userId}:
     *   get:
     *         tags:
     *         - cart
     *         description: Return the cart and his products.
     *         security:
     *           - bearerAuth: []
     *         parameters:
     *         - name: userId
     *           in: path
     *           required: true
     *           schema:
     *             type: string
     *         responses:
     *           200:
     *             description: sucess
     *             content: {}
     *           400:
     *             description: Error
     *             content: {}
     */
    app.get("/cart/:userId", (req, res) => {
        cartController.getCart(req, res);
    })

    /**
     * @swagger
     * /cart/insert:
     *   post:
     *         tags:
     *         - cart
     *         description: Insert a product into the cart.
     *         security:
     *           - bearerAuth: []
     *         requestBody:
     *           description: Dados
     *           content:
     *             application/json:
     *               schema:
     *                 type: object
     *                 properties:
     *                   shoppingCartId:
     *                     type: string
     *                   productId:
     *                     type: string
     *                   price:
     *                     type: number
     *                   quantity:
     *                     type: number
     *         responses:
     *           200:
     *             description: sucesso
     *             content: {}
     *           400:
     *             description: Erro
     *             content: {}
     */
    app.post("/cart/insert", (req, res) => {
        cartController.insertProductCart(req, res);
    })

    /**
     * @swagger
     * /cart/delete:
     *   delete:
     *         tags:
     *         - cart
     *         description: Delete a product from the cart.
     *         security:
     *           - bearerAuth: []
     *         requestBody:
     *           description: Dados
     *           content:
     *             application/json:
     *               schema:
     *                 type: object
     *                 properties:
     *                   shoppingCartId:
     *                     type: string
     *                   productId:
     *                     type: string
     *         responses:
     *           200:
     *             description: sucesso
     *             content: {}
     *           400:
     *             description: Erro
     *             content: {}
     */
    app.delete("/cart/delete", (req, res) => {
        cartController.deleteProductCart(req, res);
    })

}