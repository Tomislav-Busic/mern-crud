const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
