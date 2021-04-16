const CustomException = require("../utils/customException");
const connection = new (require("../config/bdConnection"));
let carrinhoModel = require("../models/carrinhoModel");
let produtoCarrinhoModel = require("../models/produtoCarrinhoModel");

class produtoRepository {

    async getCart(userId) {
        try {
            let bdConn = await connection.connect();
            const carrinho = carrinhoModel(bdConn);
            const produtoCarrinho = produtoCarrinhoModel(bdConn);

            let retorno = await carrinho.findOne({
                include: [{
                    model: produtoCarrinho
                }],
                where: {
                    cod_user: userId,
                    statuscarrinho: "open"
                }
            });
            return retorno;

        } catch (error) {
            throw new CustomException(error.message, 400);
        }
    }

    async insertProductCart(data) {
        try {
            let bdConn = await connection.connect();
            const produtoCarrinho = produtoCarrinhoModel(bdConn);
            let product = await produtoCarrinho.create({
                carrinhoCodigo: data.shoppingCartId,
                cod_product: data.productId,
                price: data.price,
                quantity: data.quantity
            });
            return product;

        } catch (error) {
            throw new CustomException(error.message, 400);
        }
    }

    async removeProductCart(data) {
        try {
            let bdConn = await connection.connect();
            const produtoCarrinho = produtoCarrinhoModel(bdConn);

            let product = await produtoCarrinho.findAll({
                where: {
                    carrinhoCodigo: data.shoppingCartId,
                    cod_product: data.productId
                },
                raw: true
            })

            if (product.length > 0) {
                let deletedproduct = await produtoCarrinho.destroy({
                    where: {
                        carrinhoCodigo: data.shoppingCartId,
                        cod_product: data.productId
                    }
                })
            }

            return product.length;

        } catch (error) {
            throw new CustomException(error.message, 400);
        }
    }

}

module.exports = produtoRepository;