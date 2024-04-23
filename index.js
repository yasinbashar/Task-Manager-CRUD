const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', router);

// Error handling 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

// Start server
app.listen(PORT, function()  {
    console.log(`Server is running on http://localhost:${PORT}`);
});
