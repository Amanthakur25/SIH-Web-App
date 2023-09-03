const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Unique user identifier
    userID: {
        type: String,
        unique: true,
        required: true,
    },

    // User's name
    name: {
        type: String,
        required: true,
    },

    // User's email
    email: {
        type: String,
        required: true,
        unique: true,
    },

    // User's age
    age: {
        type: Number,
        required: true,
    },

    // User's gender
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },

    // User's contact information
    contactInfo: {
        // subfields here like phone number, address, etc.
        phoneNumber: String,
        address: String,
    },

    // URL to user's profile picture
    profilePictureURL: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
