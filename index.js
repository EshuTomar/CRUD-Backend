const express = require('express');
const connectDb = require('./config/db');

const app = express();
app.use(express.json());

connectDb();
// Load environment variables from .env file
require('dotenv').config();


// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});