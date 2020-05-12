const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4080;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Route
app.use('/api/todos', require('./route/api/todos'));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
