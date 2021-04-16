const CustomException = require("../utils/CustomException");
const request = require('request');

class cartService {

    async getCart(userId) {
        let cart = await this.getCartsAPI(userId);
        return cart;
    }

    getCartsAPI(userId) {
        return new Promise(function (resolve, reject) {

            const objRequest = {
                url: `${process.env.URL_BASE_CARTS}/cart/${userId}`,
                method: 'GET',
                json: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            request(objRequest, (err, response) => {
                if (err || response.statusCode != 200) {
                    reject(new CustomException(` ${response ? response.statusMessage : err}`, response ? response.statusMessage : 400));
                } else if (response.statusCode == 200) {
                    if (response.body) {
                        resolve(response.body);
                    }
                    else {
                        reject(new CustomException("Error retrieving cart from Carts API!", 400));
                    }
                }
            });

        })
    }

    async insertProductCart(data) {
        let insertedProduct = await this.insertProductCartAPI(data);
        return insertedProduct;
    }

    insertProductCartAPI(data) {
        return new Promise(function (resolve, reject) {

            const objRequest = {
                url: `${process.env.URL_BASE_CARTS}/cart/insert`,
                method: 'POST',
                json: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }

            request(objRequest, (err, response) => {
                if (err) {
                    reject(new CustomException(`Error: ${response.statusMessage ? response.statusMessage : response.body}`, response.statusCode));
                } else if (response.statusCode == 200 || response.statusCode == 201) {
                    if (response.body) {
                        resolve(response.body);
                    }
                } else {
                    reject(new CustomException("Error inserting product on Carts API!", 400));
                }
            });

        })
    }

    async deleteProductCart(data) {
        let deletedProduct = await this.deleteProductCartAPI(data);
        return deletedProduct;
    }

    deleteProductCartAPI(data) {
        return new Promise(function (resolve, reject) {

            const objRequest = {
                url: `${process.env.URL_BASE_CARTS}/cart/remove`,
                method: 'DELETE',
                json: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }

            request(objRequest, (err, response) => {
                if (err) {
                    reject(new CustomException(`Error: ${response ? response.statusMessage : err}`, response ? response.statusMessage : 400));
                } else if (response.statusCode == 200 || response.statusCode == 201) {
                    if (response.body) {
                        resolve(response.body);
                    }
                } else {
                    reject(new CustomException("Error excluding product on Carts API!", response.statusCode));
                }
            });

        })
    }

}

module.exports = cartService;