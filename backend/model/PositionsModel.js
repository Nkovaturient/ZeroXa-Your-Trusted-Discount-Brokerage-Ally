const { model } = require("mongoose");
const { positionSchema } = require("../schemas/PositionsSchema.js");

const positionModel = new model("Position", positionSchema);

module.exports = { positionModel };