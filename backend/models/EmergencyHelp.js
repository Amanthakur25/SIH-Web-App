const mongoose = require('mongoose');

// Define a schema for emergency help contacts
const emergencyHelpSchema = new mongoose.Schema({
  // Unique identifier for the emergency contact
  contactID: {
    type: String,
    unique: true,
    required: true,
  },

  // Name of the emergency contact
  name: {
    type: String,
    required: true,
  },

  // Type of help or crisis service (e.g., "Crisis Hotline," "Emergency Services")
  typeOfHelp: {
    type: String,
    required: true,
  },

  // Contact information (e.g., phone number, email)
  contactInfo: String,

  // Additional details or notes about the contact
  description: String,
});

const EmergencyHelp = mongoose.model('EmergencyHelp', emergencyHelpSchema);

module.exports = EmergencyHelp;
