const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       dbOp = db
//         .collection("products")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       dbOp = db.collection("products").insertOne(this);
//     }
//     return dbOp
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => console.log(err));
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((err) => console.log(err));
//   }

//   // static findById(prodId) {
//   //   const db = getDb();
//   //   return db
//   //     .collection("products")
//   //     .find({ _id: new mongodb.ObjectId(prodId) })
//   //     .next()
//   //     .then((product) => {
//   //       console.log(product);
//   //       return product;
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // }

//   static async findById(prodId) {
//     const db = getDb();

//     const product = await db
//       .collection("products")
//       .find({ _id: new mongodb.ObjectId(prodId) })
//       .next();
//     return product;
//   }

//   static async deleteById(prodId) {
//     const db = getDb();

//     const isDeletedProduct = await db
//       .collection("products")
//       .deleteOne({ _id: new mongodb.ObjectId(prodId) });
//     return isDeletedProduct;
//   }
// }

// module.exports = Product;
