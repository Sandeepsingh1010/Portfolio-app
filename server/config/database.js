const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    console.log(`🔗 Connection State: ${conn.connection.readyState === 1 ? 'Connected' : 'Disconnected'}`);
    
    // Log when collections are created
    conn.connection.on('connected', () => {
      console.log('🎯 Mongoose connected to MongoDB Atlas');
    });

    conn.connection.on('error', (err) => {
      console.error('❌ Mongoose connection error:', err);
    });

    conn.connection.on('disconnected', () => {
      console.log('🔌 Mongoose disconnected');
    });

    return conn;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;