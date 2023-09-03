const mongoose = require('mongoose');

const mentalHealthGoalSchema = new mongoose.Schema({
  // Unique goal identifier
  goalID: {
    type: String,
    unique: true,
    required: true,
  },

  // Goal name (e.g., "Manage Stress," "Improve Self-esteem," "Cope with Anxiety")
  name: {
    type: String,
    required: true,
  },

  // Goal description
  description: {
    type: String,
    required: true,
  },

  // Goal category or type (e.g., general well-being, specific mental health condition)
  category: {
    type: String,
    required: true,
  },
});

const MentalHealthGoal = mongoose.model('MentalHealthGoal', mentalHealthGoalSchema);

module.exports = MentalHealthGoal;
