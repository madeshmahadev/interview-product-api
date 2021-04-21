// Load dependencies
const express = require('express');
const morgan = require('morgan');

// Create server instance
const app = express();

app.use(morgan('dev'))

const products = require('./routes/api/products');

// Handle CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
  	res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  	return res.status(200).json({});
  }
  next();
});

// Routes
app.use('/api/products', products);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));