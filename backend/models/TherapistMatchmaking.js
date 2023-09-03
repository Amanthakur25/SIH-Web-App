const mongoose = require('mongoose');

// Define a schema for therapist profiles
const therapistProfileSchema = new mongoose.Schema({
  // Unique identifier for the therapist profile
  profileID: {
    type: String,
    unique: true,
    required: true,
  },

  // Therapist's full name
  fullName: {
    type: String,
    required: true,
  },

  // Therapist's specialization or expertise (e.g., "Clinical Psychologist," "Licensed Counselor")
  specialization: {
    type: String,
    required: true,
  },

  // Therapist's credentials and qualifications
  qualifications: [String],

  // Description of the therapist's approach and philosophy
  approachDescription: String,

  // Therapist's contact information (e.g., email, phone number)
  contact: {
    email: String,
    phone: String,
  },

  // Availability and scheduling information (e.g., days and times available)
  availability: String,

  // Location information (e.g., office address, virtual sessions)
  location: String,

  // Accepted payment methods (e.g., insurance, self-pay)
  paymentMethods: [String],

  // User reviews and ratings
  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      review: String,
    },
  ],
});

const TherapistProfile = mongoose.model('TherapistProfile', therapistProfileSchema);

// Define a schema for user preferences and criteria for therapist matching
const therapistMatchCriteriaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },

  // Preferred therapist specialization or expertise
  preferredSpecialization: String,

  // Preferred therapist location or virtual sessions
  preferredLocation: String,

  // Preferred payment methods
  preferredPaymentMethods: [String],
});

const TherapistMatchCriteria = mongoose.model('TherapistMatchCriteria', therapistMatchCriteriaSchema);

module.exports = {
  TherapistProfile,
  TherapistMatchCriteria,
};
