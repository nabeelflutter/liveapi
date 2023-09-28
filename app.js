require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const PORT = process.env.PORT || 8000;
const produsts_routes = require('./routes/products')
app.use('/api/products', produsts_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log('connected app')
        })
    } catch (e) {
        console.log(e)
    }
}
start();