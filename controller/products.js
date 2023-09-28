const Product = require('../models/products');
const getAllProducts = async (req, res) => {
    const { company, name } = req.query;
    const queryObj = {};
    if (company) {
        queryObj.company = company;
    }
    if (name) {
        queryObj.name = name;
    }
    const myData = await Product.find(queryObj);
    res.status(200).json({
        myData
    });
};

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({
        myData
    });
};

module.exports = {
    getAllProducts,
    getAllProductsTesting
}