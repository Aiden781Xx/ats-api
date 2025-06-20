 const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/user', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('✅ ATS API is running...');
});

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`);
});
