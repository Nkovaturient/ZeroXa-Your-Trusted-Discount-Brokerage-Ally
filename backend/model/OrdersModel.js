const { model } = require("mongoose");
const { orderSchema } = require("../schemas/OrdersSchema.js");

const orderModel = new model("Order", orderSchema);

module.exports = { orderModel };