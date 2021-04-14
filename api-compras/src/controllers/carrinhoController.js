const carrinhoService = new(require('../services/carrinhoService'));

class produtoController {

    async getCarrinho(req, res) {  
        
        let userId = req.params.userId;
        let listaCarrinho = await carrinhoService.getCarrinho(userId);
        res.status(200).json( listaCarrinho )
    }

    async insereProdutoCarrinho(req, res) { 
        let dados= {
            nome: req.body.nome,
            preco:  req.body.preco
        }

        let produtos = await carrinhoService.insereProdutoCarrinho(dados);
        res.status(200).json({ produtos: produtos})
    }

    async removeProdutoCarrinho(req, res) { 
        let dados= {
            nome: req.body.nome,
            preco:  req.body.preco
        }

        let produtos = await carrinhoService.removeProdutoCarrinho(dados);
        res.status(200).json({ produtos: produtos})
    }

}

module.exports = produtoController;