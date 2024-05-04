const express = require('express');
const router = express.Router();
const controller = require('../Controller/controller');

// Create a new task
router.post('/', controller.createTask);

// Get all tasks
router.get('/', controller.getAllTasks);

// Get a single task by ID
router.get('/:id', controller.getTaskById);

// Update a task by ID
router.put('/:id', controller.updateTask);

// Delete a task by ID
router.delete('/:id', controller.deleteTask);

module.exports = router;