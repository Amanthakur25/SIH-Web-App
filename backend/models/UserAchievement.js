const mongoose = require('mongoose');

// Define a schema for user achievements
const userAchievementSchema = new mongoose.Schema({
  // Unique identifier for the user achievement
  achievementID: {
    type: String,
    unique: true,
    required: true,
  },

  // User associated with the achievement
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  // Achievement title or name
  title: {
    type: String,
    required: true,
  },

  // Description or details about the achievement
  description: String,

  // Date when the achievement was earned
  dateEarned: {
    type: Date,
    default: Date.now,
  },
});

// Define a schema for user points and scoring
const userScoreSchema = new mongoose.Schema({
  // User associated with the score
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  // Total points earned by the user
  totalPoints: {
    type: Number,
    default: 0,
  },

  // Last updated timestamp
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

// Define a schema for user badges and achievements
const userBadgeSchema = new mongoose.Schema({
  // User associated with the badge
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  // Badge title or name
  title: {
    type: String,
    required: true,
  },

  // Description or details about the badge
  description: String,
});

const UserAchievement = mongoose.model('UserAchievement', userAchievementSchema);
const UserScore = mongoose.model('UserScore', userScoreSchema);
const UserBadge = mongoose.model('UserBadge', userBadgeSchema);

module.exports = {
  UserAchievement,
  UserScore,
  UserBadge,
};
