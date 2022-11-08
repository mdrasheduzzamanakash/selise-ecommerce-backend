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
