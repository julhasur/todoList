const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// GET all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find(); // Fetch all tasks
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new task
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body); // Create a new task from request body
        const savedTask = await newTask.save(); // Save task to DB
        res.status(201).json(savedTask); // Send the saved task in the response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a single task by ID
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id); // Fetch task by ID
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task); // Send the task data
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT (update) a task by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update task and return the updated version
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask); // Send the updated task
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE a task by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id); // Delete task by ID
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' }); // Send success message
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
