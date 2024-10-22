const express = require('express');
const cors = require('cors'); // Import the cors package
const mongoose = require('mongoose');
const signupHandler = require('./path/to/signupHandler'); // Adjust the path accordingly

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Use CORS middleware here
app.use(express.json()); // To parse JSON bodies

// Routes
app.post('/signup', signupHandler);

// Connect to MongoDB (ensure you have your connection string)
mongoose.connect('your_mongo_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
