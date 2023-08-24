const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
