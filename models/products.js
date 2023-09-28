const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, 'Price must be providerd']
    },
    company: {
        type: String,
        enum: {
            values: ['apple', 'dell']
        }
    },
    creatAt: {
        type: Date,
        default: Date.now()
    },

});

const Product = mongoose.model('Product', productsSchema);
module.exports = Product;