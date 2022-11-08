const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
    productName: { type: String },
    productShortCode: { type: String },
    category: { type: String },
    price: { type: Number },
    count: { type: Number },
    inCart: { type: Number },
    description: { type: String },
    imageUrl: { type: String },
    isBestAchived: { type: String },
    createdDate: { type: Date },
    origin: { type: String },
});
module.exports = mongoose.model('Product', Product);
