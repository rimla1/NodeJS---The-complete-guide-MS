const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

const products = [];


router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //  res.render('add-product', {docTitle: 'Add-Product', path: "/admin/add-product"}); (Pug Template)
    res.render('add-product', {titleOfPage: 'Add-product', path: "/admin/add-product"});
})

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
})


exports.routes = router
exports.products = products