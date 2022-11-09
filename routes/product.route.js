const express = require('express');

const app = express();
const productRoute = express.Router();
const Product = require('../model/Product');

// get all Product from store
productRoute.route('/').get((req, res, next) => {
    Product.find({}, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

// get product in chunk
productRoute.route('/chunk/:pageIndex/:pageSize').get((req, res, next) => {
    Product.find({}, (error, data) => {
        const { pageIndex } = req.params;
        const pageSize = req.params.pageSize - 1;
        if (error) {
            return next(error);
        }
        const chunkData = data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize + 1);
        res.json(chunkData);
    });
});

// add a single product
productRoute.route('/add-Product').post((req, res, next) => {
    Product.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

// find by id
productRoute.route('/read-Product/:id').get((req, res, next) => {
    Product.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

// update Product store
productRoute.route('/update-Product/:id').put((req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

productRoute.route('/delete-Product/:id').delete((req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

module.exports = productRoute;
