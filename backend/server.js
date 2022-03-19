const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Initializing middleware
app.use(express.json({ extended: false }));

//someone being smart
app.get('/', (req, res) => {
  return res.status(204).json({
    msg: "We are glad you like experimenting, but there's nothing here"
  });
});

//Defining routes

// this route is for individual user to change their profile info
app.use('/api/user', require('./routes/api/user'));

// this route is for querying data every member can see
app.use('/api/getcommondata', require('./routes/api/getcommondata'));

// this route is for all actions that can be carried out by the board
app.use('/api/adminroles', require('./routes/api/adminroles'));

// this route is for processes that everyone can perform
app.use('/api/commonprocess', require('./routes/api/commonprocess'));

// this route is for all editorial methods
app.use('/api/editorial', require('./routes/api/editorial'));

// this route is for all logs of the website
app.use('/api/maintainance', require('./routes/api/maintenance'));

//for user authentication
app.use('/api/auth', require('./routes/api/auth'));

//someone else being smarty-pants
app.get('*', (req, res) => {
  return res.status(404).json({ msg: 'There is nothing to see here' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
