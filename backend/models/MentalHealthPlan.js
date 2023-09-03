const mongoose = require('mongoose');

const mentalHealthPlanSchema = new mongoose.Schema({
  // Unique plan identifier
  planID: {
    type: String,
    unique: true,
    required: true,
  },

  // User ID of the plan owner
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  // Goal ID associated with the plan
  goalID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MentalHealthGoal',
    required: true,
  },

  // Plan name
  name: {
    type: String,
    required: true,
  },

  // Plan description (optional)
  description: String,

  // Plan creation date
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

  // Plan last modified date
  lastModifiedAt: {
    type: Date,
    required: true,
  },

  // Status (e.g., active, completed, paused)
  status: {
    type: String,
    enum: ['active', 'completed', 'paused'],
    required: true,
  },

  // Progress tracking (e.g., percentage completion)
  progress: {
    type: Number,
    min: 0,
    max: 100,
  },
});

const MentalHealthPlan = mongoose.model('MentalHealthPlan', mentalHealthPlanSchema);

module.exports = MentalHealthPlan;
