// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require('dotenv');

app.use(express.json());
dotenv.config();
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});