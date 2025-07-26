const express = require('express');

const app = express();
app.use(express.json());

// Load environment variables from .env file
require('dotenv').config();


// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});