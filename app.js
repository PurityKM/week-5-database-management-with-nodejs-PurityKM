const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const indexRoutes = require('./routes/index');

// Middleware
app.use(bodyParser.json());

// Use routes
app.use('/api', indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});