const mongoose = require('mongoose');

const mindfulnessExerciseSchema = new mongoose.Schema({
  // Unique identifier for the exercise
  exerciseID: {
    type: String,
    unique: true,
    required: true,
  },

  // Title of the mindfulness exercise
  title: {
    type: String,
    required: true,
  },

  // Description or instructions for the exercise
  description: String,

  // Duration of the exercise in minutes
  duration: {
    type: Number,
    required: true,
    min: 1,
  },

  // URL or path to the audio or video content of the exercise
  mediaURL: String,

  // Tags or categories associated with the exercise (e.g., "Meditation," "Stress Relief")
  tags: [String],

  // Created timestamp
  createdAt: {
    type: Date,
    default: Date.now,
  },

  // Creator or author of the exercise (can be a user or an organization)
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
});

const MindfulnessExercise = mongoose.model('MindfulnessExercise', mindfulnessExerciseSchema);

module.exports = MindfulnessExercise;
