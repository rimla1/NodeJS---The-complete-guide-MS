const getDb = require('../util/database').getDb;

class Product {
  constructor(t, p, d, img) {
    this.title = t;
    this.price = p;
    this.description = d;
    this.imageUrl = img;
  }

  save() {
    // Database connection
    const db = getDb();
    // db.collection('products').insertOne(this).then(result => {console.log(result)}).catch(err => console.log(err))
    try {
      result = db.collection('products').insertOne(this)
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = Product
