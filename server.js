const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./server/config/database');

// Import routes
const contactRoutes = require('./server/routes/contactRoutes');
const userRoutes = require('./server/routes/userRoutes');

// Load environment variables
dotenv.config({ path: './server/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React build - commented out for now
// app.use(express.static(path.join(__dirname, 'dist')));

// Connect to database
connectDB();

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to My Portfolio application."
  });
});

// Handle React Router routes - commented out for now
// app.get('*', (req, res) => {
//   if (!req.path.startsWith('/api')) {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
//   } else {
//     res.status(404).json({ message: 'API endpoint not found' });
//   }
// });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;