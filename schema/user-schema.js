const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    user_name: String,
    email: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
