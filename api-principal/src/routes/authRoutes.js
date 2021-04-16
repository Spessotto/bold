const authController = new( require('../controllers/authController')) 

module.exports = function (app) {

    /**
    * @swagger
    * /auth/token:
    *   post:
    *     tags:
    *       - auth
    *     description: Returns a token.
    *     security:
    *       - bearerAuth: []
    *     consumes:
    *       - application/json
    *     produces:
    *       - application/json
    *     parameters:
    *       - name: body
    *         in: body
    *         required: true
    *         schema:
    *           type: object
    *           properties:
    *             username:
    *               type: string
    *             password:
    *               type: string
    *     responses:
    *       200:
    *         description: Success        
    */
    app.post("/auth/token", (req, res) => {
        authController.getToken(req,res);
    })   
 

}