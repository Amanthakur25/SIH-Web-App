const mongoose = require('mongoose');

// Define a schema for cultural sensitivity and inclusivity feedback
const culturalFeedbackSchema = new mongoose.Schema({
  // Unique identifier for the feedback
  feedbackID: {
    type: String,
    unique: true,
    required: true,
  },

  // User who provided the feedback
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  // Feedback message or description
  feedbackMessage: {
    type: String,
    required: true,
  },

  // Date when the feedback was submitted
  submissionDate: {
    type: Date,
    default: Date.now,
  },
});

// Define a schema for cultural sensitivity and inclusivity improvements
const culturalImprovementSchema = new mongoose.Schema({
  // Unique identifier for the improvement
  improvementID: {
    type: String,
    unique: true,
    required: true,
  },

  // Improvement title or description
  improvementTitle: {
    type: String,
    required: true,
  },

  // Details or notes about the improvement
  improvementDetails: String,

  // Status of the improvement (e.g., "In Progress," "Completed")
  improvementStatus: String,

  // Date when the improvement was implemented or updated
  implementationDate: Date,
});

const CulturalFeedback = mongoose.model('CulturalFeedback', culturalFeedbackSchema);
const CulturalImprovement = mongoose.model('CulturalImprovement', culturalImprovementSchema);

module.exports = {
  CulturalFeedback,
  CulturalImprovement,
};
