const CustomException = require("../utils/customException");
const carrinhoRepository = new (require('../repositories/carrinhoRepository'));
const conexao = new (require("../config/bdConnection"));

class produtoService {

    async getCarrinho() {
        //await conexao.connect();
        let carrinho = await carrinhoRepository.getCarrinho();

        //await conexao.disconnect();
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