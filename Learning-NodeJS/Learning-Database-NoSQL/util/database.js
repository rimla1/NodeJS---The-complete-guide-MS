const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

// const mongoConnect = async(callback) => {
//   try {
//     const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ekxmb.mongodb.net/shop?retryWrites=true&w=majority`)
//     console.log('Connection is successful')
//     _db = client.db()
//     callback()
//   } catch (err) {
//     console.log(err)
//     throw err;
//   }
// }

const mongoConnect = callback => {
  MongoClient.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ekxmb.mongodb.net/shop?retryWrites=true&w=majority`)
  .then(client => {
    console.log('Connection is successful')
    _db = client.db()
    callback()
  })
  .catch(err => {
    console.log(err)
    throw err;
  })
}

const getDb = () => {
  if (_db) {
    return _db
  }
  throw 'No database found!'
}



exports.mongoConnect = mongoConnect;
exports.getDb = getDb