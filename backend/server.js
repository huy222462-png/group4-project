const express = require('express');
const app = express();

// Middleware để đọc JSON
app.use(express.json());

// Import routes
const userRoutes = require('./routes/user');
app.use('/', userRoutes);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
