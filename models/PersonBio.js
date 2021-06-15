const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genderTyp = {
  male: "male",
  female: "female",
};

const usersAcctSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: [genderTyp.male, genderTyp.female],
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d/.test(v);
      },
      message: (props) => `${props.value} is not valid phone number`,
    },
    required: true,
  },
  acctId: {
    type: Schema.Types.ObjectId,
    ref: "person_accts",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UsersModel = mongoose.model("bio_accts", usersAcctSchema);

module.exports = UsersModel;
