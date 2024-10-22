const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const signupHandler = require('./path/to/signupHandler');
const loginHandler = require('./path/to/loginHandler'); // Import the login handler

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/signup', signupHandler);
app.post('/login', loginHandler); // Add the login route

// MongoDB connection
mongoose
  .connect('your_mongo_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
