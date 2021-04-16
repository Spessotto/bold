const request = require('request');
const jwt = new (require('../utils/jwt'));

class authService {

    async getToken() {
        try {
            let token = await jwt.criarJWT();
            return token;

        } catch (error) {
            console.log(error);
        }
    }   

}

module.exports = authService;