const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: String,
    body: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
