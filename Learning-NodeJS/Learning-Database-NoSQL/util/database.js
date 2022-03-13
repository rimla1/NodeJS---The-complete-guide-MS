const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = async(callback) => {
  try {
    const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ekxmb.mongodb.net/Cluster0?retryWrites=true&w=majority`)
    console.log('Connection is successful')
    callback(client)
  } catch (err) {
    console.log(err)
  }
}


// const mongoConnect = callback => {
//   MongoClient.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ekxmb.mongodb.net/Cluster0?retryWrites=true&w=majority`)
//   .then(client => {
//     console.log('Connection is successful')
//     callback(client)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

module.exports = mongoConnect;