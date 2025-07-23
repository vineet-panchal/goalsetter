// First, install the cors package in your backend directory:
// npm install cors

// Then update your backend/server.js file:

const express = require('express');
const cors = require('cors'); // Add this line
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;

connectDB();
const app = express();

// Add CORS middleware - ADD THESE LINES
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require('./routes/GoalRoutes'));
app.use("/api/users", require('./routes/UserRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});