const taskController = require("../controllers/task.controller");
module.exports = () => {
  var router = require("express").Router();

  router.get("/allTasks", taskController.getAllTasks);
  router.post("/createTask", taskController.createTask);

  return router;
};
