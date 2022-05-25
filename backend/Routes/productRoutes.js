const express = require('express');
const mongoose = require('mongoose');
const { getProducts, getProduct } = require('../controller/productController');

const router = express.Router();

// GET ALL THE PRODUCTS
router.route('/products').get(getProducts);

// GET ROUTE FOR SINGLE PRODUCT

router.route('/product/:id').get(getProduct);

module.exports = router;
