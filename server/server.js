const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const TaskController = require('./TaskController');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000
const mongoURI = 'mongodb+srv://EvanCrews:Bubi3021@cluster0.eyj9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const taskRouter = express.Router();

taskRouter.get('/', TaskController.getTasks);
taskRouter.post('/create', TaskController.createTask);

app.use('/task', taskRouter);


app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});
app.listen(PORT, () => console.log('listening on PORT 3000'));