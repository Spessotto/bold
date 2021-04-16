const CustomException = require("../utils/customException");
let productModel = require("../models/productModel");

class productRepository {

    getProducts() {
        return new Promise(function (resolve, reject) {
            var fields = {};
            var query = productModel.find(fields).select(['-__v']);
            query.exec(function (err, result) {
                if (err) {
                    reject(new CustomException("Error retrieving products from BD. Error: " + err));
                } else {
                    resolve(result);
                }
            });
        });
    }

    insertProduct(data) {
        return new Promise(function (resolve, reject) {
            let name = data.name ? data.name : "";
            let price = data.price ? data.price : "";
          
            let newProduct = productModel({
                name: name,
                price: price           
            })

            newProduct.save(function (err, result) {
                if (err) {
                    console.error("Error saving the product on Database! Error: ", err);
                    reject(new CustomException("Error saving the product on Database! Error: " + err));
                }
                else {
                    resolve(newProduct);
                }
            });
        });
    }


}

module.exports = productRepository;