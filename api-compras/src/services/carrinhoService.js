const CustomException = require("../utils/customException");
const carrinhoRepository = new (require('../repositories/carrinhoRepository'));
const conexao = new (require("../config/bdConnection"));

class produtoService {

    async getCarrinho(userId) {
        let carrinhoRetorno = await carrinhoRepository.getCarrinho(userId);

        let carrinho = {
            shoppingCartId: carrinhoRetorno.codigo,
            userId: carrinhoRetorno.cod_user
        }

        let products = [];
        carrinhoRetorno.produtocarrinhos.forEach(element_product => {
            let produto = {
                productid: element_product.codigo,
                price: element_product.price
            }
            products.push(produto);
        });

        carrinho.totalPrice = products.reduce((total,element) => total + element.price,0);
        carrinho.totalQuantity = products.length;
        carrinho.products = products;
        return carrinho;
    }

    async insereProdutoCarrinho(dados) {
        await conexao.connect();
        let produtos = await carrinhoRepository.insereProdutoCarrinho(dados);
        await conexao.disconnect();
        return;
    }

    async removeProdutoCarrinho(dados) {
        await conexao.connect();
        let produtos = await carrinhoRepository.removeProdutoCarrinho(dados);
        await conexao.disconnect();
        return;
    }

}

module.exports = produtoService;