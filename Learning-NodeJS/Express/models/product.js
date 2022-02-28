const fs = require('fs');
const path = require ('path');
const rootDir = require('../util/pathRoot')

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
         cb([])
        } else {
        cb(JSON.parse(fileContent))
        }
    })
}

module.exports = class Product {
    constructor(i, t, img, prc, desc) {
        this.id = i
        this.title = t;
        this.imageUrl = img;
        this.price = prc;
        this.description = desc;
    }

    save() {
        getProductsFromFile( products => {
            if (this.id) {
               const existingProductIndex = products.findIndex(prod => prod.id === this.id);
               const updatedProducts = [...products];
               updatedProducts[existingProductIndex] = this;
               fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                console.log(err);
               })
            } else {
                this.id = Math.random().toString();
                products.push(this)
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
            });
            }
            
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id)
            cb(product)
        })
    }
}