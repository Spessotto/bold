const request = require('request');

class productService {

    async getProducts() {
        try {
            let products = await this.productsAPI();
            return products;

        } catch (error) {
            console.log(error);
        }
    }

    productsAPI() {
        return new Promise(function (resolve, reject) {

            const objRequest = {
                url: `${process.env.URL_BASE_PRODUCTS}/products`,
                method: 'GET',
                json: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            request(objRequest, (err, response) => {
                if (err || response.statusCode != 200) {

                    if (response.statusCode == 401) {
                        reject(new CustomException("Invalid token.", 401));
                    }
                    else if (response.statusCode == 204) {
                        reject(new CustomException("", 204));
                    }
                    else {
                        reject(new CustomException(`Error: ${response.body}`, response.statusCode));
                    }

                } else if (response.statusCode == 200) {
                    if (response.body) {
                        resolve(response.body);
                    }
                    else {
                        reject(new CustomException("Error retrieving products from Products API!"));
                    }
                }
            });


        })
    }

}

module.exports = productService;