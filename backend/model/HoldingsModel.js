const { model } = require("mongoose");
const { holdingSchema } = require("../schemas/HoldingsSchema.js");

const holdingModel = new model("Holding", holdingSchema);

module.exports = { holdingModel };
