const { model } = require("mongoose");
const { userSchema } = require("../schemas/userSchema");

const userModel = new model("User", userSchema);

module.exports = { userModel };