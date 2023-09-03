const mongoose = require('mongoose');

const mentalHealthProgressSchema = new mongoose.Schema({
  // User ID or reference for the user associated with this progress entry
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  // Mental Health Plan ID or reference (optional) if you want to associate with a specific plan
  planID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MentalHealthPlan',
  },

  // Date of the progress entry
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },

  // Mood or mental state (e.g., "Happy," "Anxious," "Neutral")
  mood: String,

  // Stress level (e.g., on a scale of 1 to 10)
  stressLevel: {
    type: Number,
    min: 1,
    max: 10,
  },

  // Sleep quality (e.g., "Good," "Poor")
  sleepQuality: String,

  // Additional fields for other progress metrics anxiety level, self-esteem, etc.
});

const MentalHealthProgress = mongoose.model('MentalHealthProgress', mentalHealthProgressSchema);

module.exports = MentalHealthProgress;
