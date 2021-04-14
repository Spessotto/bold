const produtoController = new( require('../controllers/carrinhoController')) 

module.exports = function (app) {     

    app.get("/carrinho/:userId", (req, res) => {
        produtoController.getCarrinho(req,res);
    })

    app.get("/carrinho/insere", (req, res) => {
        produtoController.insereProdutoCarrinho(req,res);
    })

    app.post("/carrinho/remove", (req, res) => {
        produtoController.removeProdutoCarrinho(req,res);
    })

}