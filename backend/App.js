const express=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const signupHandler = require('./handler/signuphandler');
const App = express();
App.use(bodyParser.json());

//connect to database mongoose
mongoose.connect("mongodb://localhost:27017/Signup")
.then(() => {
  console.log('Connected to the database');
})
.catch((err) => {
  console.log('Error connecting to the database', err);
});

App.post('/signup', signupHandler);
App.listen(3000, () => {
  console.log('Server is running on port 3000');
});
