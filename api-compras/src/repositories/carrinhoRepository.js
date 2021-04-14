const CustomException = require("../utils/customException");
let carrinhoModel = require("../models/carrinhoModel");
let produtoCarrinhoModel = require("../models/produtoCarrinhoModel");

const conexao = new (require("../config/bdConnection"));
//const Sequelize = require("sequelize");

class produtoRepository {

    async getCarrinho() {
        try {
            let conexaoBD = await conexao.connect();
            const carrinho = carrinhoModel(conexaoBD);
            const produtoCarrinho = produtoCarrinhoModel(conexaoBD);
            

            let retorno = await carrinho.findAll({
                include:[{
                    model: produtoCarrinho
                }],
                // where: {
                //     statuscarrinho: "open"
                // }
            });   
            
            // let carrinhoRetorno = await carrinho.findAll({
            //     where: {
            //         statuscarrinho: "open"
            //     }
            // });   

            return retorno;


        } catch (erro) {
            console.log(erro)
        }
       
    }

    async getCarrinho1() {
        try {
            let conexaoBD = await conexao.connect();
            const model = carrinhoModel(conexaoBD, Sequelize);

            let carrinho = await model.findAll({
                where: {
                    status: "open"
                }
            });           
            return carrinho;

        } catch (erro) {
            console.log(erro)
        }
       
    }

    insereProduto(dados) {
      
    }

    removeProdutoCarrinho(dados) {
      
    }



}

module.exports = produtoRepository;