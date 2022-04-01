const { mongoose, Schema } = require("mongoose");

const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, require: true },
      quantity: { type: Number, require: true },
    },
  ],
  users: {
    name: { type: String, require: true },
    userId: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  },
});

module.exports = mongoose.model("Order", orderSchema);
