const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(__dirname));
let todos = []; // Tasks-ah temporary-ah inga save pannuvom

// Get all tasks
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// Add a new task
app.post('/api/todos', (req, res) => {
    const { task } = req.body;
    if (task) {
        todos.push(task);
        res.json({ message: "Task added successfully!", todos });
    } else {
        res.status(400).json({ message: "Task cannot be empty" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
