const mongoose = require('mongoose');

const Product = mongoose.Schema({
    productname:String,
    price:String
});

module.exports = {'Product':Product};