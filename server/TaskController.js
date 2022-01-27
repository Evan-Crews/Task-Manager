const { convertPatternsToTasks } = require('fast-glob/out/managers/tasks');
const Task = require('./TaskModel');

const TaskController = {
  getTasks(req, res, next) {
    Task.find({}, (err, taskFound) =>{
      if (err) {
        console.log(err);
        next();
      } else {
        // console.log('returning tasks', taskFound);
        res.status(200).json(taskFound);
      }
    })
  },
  createTask(req, res, next) {
    console.log('this is req.body', req.body);
    Task.create({task: req.body.task}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('task created');
        next();
      }
    })
  }
}
module.exports = TaskController;