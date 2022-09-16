const express = require('express');
const cors = require('cors');

const app = express();

// Settings
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to contact book application. '
  });
});

module.exports = app;