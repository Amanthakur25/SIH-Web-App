const mongoose = require('mongoose');

// Define a schema for wearable devices
const wearableDeviceSchema = new mongoose.Schema({
  // Unique identifier for the wearable device
  deviceID: {
    type: String,
    unique: true,
    required: true,
  },

  // Name or model of the wearable device
  deviceName: {
    type: String,
    required: true,
  },

  // Manufacturer or brand of the device
  manufacturer: String,

  // Type of wearable device (e.g., "Fitness Tracker," "Smartwatch")
  deviceType: String,

  // User associated with the device
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  // Last synchronization timestamp
  lastSynced: Date,
});

// Define a schema for user device profiles
const userDeviceProfileSchema = new mongoose.Schema({
  // User associated with the device profile
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  // Wearable device associated with the user profile
  wearableDevice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WearableDevice', // Reference to the WearableDevice model
    required: true,
  },

  // User-specific device settings or preferences
  settings: {
    // Example fields for settings:
    notificationPreferences: {
      // Add fields for notification preferences
      enableNotifications: Boolean,
      notificationSound: String,
    },
    trackingPreferences: {
      // Add fields for tracking preferences
      enableLocationTracking: Boolean,
      enableHealthDataSync: Boolean,
    },
    displayPreferences: {
      // Add fields for display preferences
      themeColor: String,
      fontSize: Number,
    },
    // You can add more settings fields as needed for your application
  },
});

const WearableDevice = mongoose.model('WearableDevice', wearableDeviceSchema);
const UserDeviceProfile = mongoose.model('UserDeviceProfile', userDeviceProfileSchema);

module.exports = {
  WearableDevice,
  UserDeviceProfile,
};
