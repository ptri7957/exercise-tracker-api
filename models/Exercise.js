const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
  },
  description: {
      type: String,
      required: true
  },
  duration: {
      type: String
  },
  date: {
      type: Date,
      default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
