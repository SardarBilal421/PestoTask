const factory = require("./handlerFactory");
const Task = require("./../Models/taskModel");

exports.getAllTasks = factory.getAll(Task);
exports.createTasks = factory.createOne(Task);
exports.getTaskByID = factory.getOne(Task);
exports.updateTask = factory.updateOne(Task);
exports.deleteTask = factory.deleteOne(Task);
