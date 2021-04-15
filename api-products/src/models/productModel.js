const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let product = new Schema({
    name: String,
    price: Number,
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('product', product, 'product');