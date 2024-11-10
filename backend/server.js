const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// MongoDB connection string - Update for Kubernetes
let mongodb_url = 'mongodb://mongodb:27017/';  // MongoDB service name in Kubernetes
let dbName = 'yolomy';  // Your database name

// Define a URL to connect to the database
const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.log('Database connection error:', err);
  });

// Initializing express
const app = express();

// Body parser middleware
app.use(express.json());

// Multer setup for handling file uploads
app.use(upload.array());

// CORS middleware
app.use(cors());

// Use routes
app.use('/api/products', productRoute);

// Define the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
