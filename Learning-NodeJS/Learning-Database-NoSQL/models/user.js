const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class User {
  constructor(username, email, id) {
    this.name = username;
    this.email = email;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((err) => console.log(err));
  }

  static findById(userId) {
    const db = getDb();
    db.collection("users").findOne({ _id: new mongodb.ObjectId(userId) });
    // .next()
    // .then((user) => {
    //   console.log(user);
    //   return user;
    // })
    // .catch((err) => console.log(err));
  }
}

module.exports = User;
