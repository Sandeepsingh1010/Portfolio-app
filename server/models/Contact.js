const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastname: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address'
    ]
  }
}, {
  timestamps: true // This adds createdAt and updatedAt fields automatically
});

// Create indexes for better performance
contactSchema.index({ firstname: 1, lastname: 1 });

// Instance method to get full name
contactSchema.methods.getFullName = function() {
  return `${this.firstname} ${this.lastname}`;
};

// Static method to find by email
contactSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;