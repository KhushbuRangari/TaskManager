const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', 
  },
  dueDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['Todo', 'In Progress', 'Done'],
    default: 'Todo',
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;