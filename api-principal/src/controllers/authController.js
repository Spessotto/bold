const authService = new(require('../services/authService'));

class authController {

    async getToken(req, res) {        
        let token = await authService.getToken();
        res.status(200).json({ token: token})
    }

}

module.exports = authController;