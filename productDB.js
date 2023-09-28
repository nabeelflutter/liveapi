require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/products');
const Productjson = require('./product.json');
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(Productjson);
        console.log('success')
    } catch (e) {
        console.log(e);
    }
}
start();