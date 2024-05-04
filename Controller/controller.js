//datya will be stored here
let storage = [];

// Task model
class Task {
    constructor(id, title, description, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

// Generate unique task ID
function generateTaskId() {
    return Date.now();
}

// Create a new task
function createTask(req, res) {
    const { title, description, status } = req.body;
    const id = generateTaskId();
    const task = new Task(id, title, description, status);
    storage.push(task);
    res.status(201).json(task);
}

// Get all tasks
function getAllTasks(req, res) {
    res.json(storage);
}

// Get a single task by ID
function getTaskById(req, res) {
    const id = parseInt(req.params.id);
    const task = storage.find(task => task.id === id);
    if (!task) {
        res.status(404).json({error: 'error!Task not found' });
    } else {
        res.json(task);
    }
}

// Update task by ID
function updateTask(req, res) {
    const id = parseInt(req.params.id);
    const { title, description, status } = req.body;
    const index = storage.findIndex(task => task.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Task not found' });
    } else {
        const updatedTask = { ...storage[index], title, description, status };
        storage[index] = updatedTask;
        res.json(updatedTask);
    }
}

// Delete task by ID
function deleteTask(req, res) {
    const id = parseInt(req.params.id);
    const index = storage.findIndex(task => task.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Task not found' });
    } else {
        storage.splice(index, 1);
        res.sendStatus(204);
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};