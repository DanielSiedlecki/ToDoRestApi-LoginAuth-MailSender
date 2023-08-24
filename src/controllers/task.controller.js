const task = require("../models/task");

exports.getAllTasks = async (req, res) => {
  try {
    const allTasks = await task.find({});

    res.status(201).json(allTasks);
  } catch (error) {
    res.status(500).json({ error });
  }
};
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new task({
      title,
      description,
    });
    const savedTask = await newTask.save();

    res.status(201).json({ message: "Task created successfully", savedTask });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the task" });
  }
};
