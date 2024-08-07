const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A task must have name"],
  },
  description: {
    type: String,
  },

  status: {
    type: String,
    enum: ["All", "To Do", "In Progress", "Done"],
    default: "To Do",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
