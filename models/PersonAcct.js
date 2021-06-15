const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersAcctSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  onsite: {
    type: String,
    required: true,
    enum: ["yes", "no"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UsersModel = mongoose.model("person_accts", usersAcctSchema);

module.exports = UsersModel;
