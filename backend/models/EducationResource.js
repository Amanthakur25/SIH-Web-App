const mongoose = require('mongoose');

// Define a schema for educational resources
const educationResourceSchema = new mongoose.Schema({
  // Unique identifier for the resource
  resourceID: {
    type: String,
    unique: true,
    required: true,
  },

  // Title of the educational resource or article
  title: {
    type: String,
    required: true,
  },

  // Content or text of the resource
  content: {
    type: String,
    required: true,
  },

  // Category or topic of the resource (e.g., "Anxiety," "Depression")
  category: String,

  // Publication date of the resource
  publicationDate: Date,

  // Author or source of the resource
  author: String,

  // URL or link to the full resource (if available online)
  url: String,
});

const EducationResource = mongoose.model('EducationResource', educationResourceSchema);

module.exports = EducationResource;
