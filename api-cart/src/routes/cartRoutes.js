const cartController = new( require('../controllers/cartController')) 

module.exports = function (app) {     

    app.get("/cart/:userId", (req, res) => {
        cartController.getCart(req,res);
    })

    app.post("/cart/insert", (req, res) => {
        cartController.insertProductCart(req,res);
    })

    app.post("/cart/remove", (req, res) => {
        cartController.removeProductCart(req,res);
    })

}