const mongoose = require('mongoose');

const journalMoodEntrySchema = new mongoose.Schema({
  // Unique identifier for the journal entry
  entryID: {
    type: String,
    unique: true,
    required: true,
  },

  // User who created the journal entry
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  // Date of the journal entry
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },

  // Content of the journal entry
  content: {
    type: String,
    required: true,
  },

  // Mood or emotion tracking associated with the entry (e.g., "Happy," "Anxious")
  mood: String,

  // Additional fields for mood-related information, if needed like stress level, energy level, etc.
});

const JournalMoodEntry = mongoose.model('JournalMoodEntry', journalMoodEntrySchema);

module.exports = JournalMoodEntry;
