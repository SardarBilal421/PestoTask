const express = require("express");
const router = express.Router();
const taskController = require("../Controller/taskController");

router.post("/", taskController.createTasks);
router.get("/", taskController.getAllTasks);
router.delete("/:name", taskController.deleteTask);
router.patch("/updateTask/:name", taskController.updateTask);

module.exports = router;
