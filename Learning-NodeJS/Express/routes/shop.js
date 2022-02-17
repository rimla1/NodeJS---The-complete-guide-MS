const path = require('path')

const express = require('express');

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router();



router.get('/', (req, res, next) => {
    const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // res.render('shop', {prods: products, docTitle: 'Shop', path: "/"}) (Pug Template)
    // res.render('shop', {prods: products, titleOfPage: 'Shop', path: "/", hasProducts: products.length > 0, activeShop: true, productCSS: true}) (Handlebars Template)
    res.render('shop', {prods: products, pageTitle: 'Shop'})
})

module.exports = router