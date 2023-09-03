const mongoose = require('mongoose');

// Define a schema for the community support feature
const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
});

// Define a schema for Community Discussion Topics
const communityTopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // You can add more fields like upvotes, replies, etc., as needed
});

// Define a schema for Community Discussion Replies
const communityReplySchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CommunityTopic',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Community = mongoose.model('Community', communitySchema);
const CommunityTopic = mongoose.model('CommunityTopic', communityTopicSchema);
const CommunityReply = mongoose.model('CommunityReply', communityReplySchema);

module.exports = {
  Community,
  CommunityTopic,
  CommunityReply,
};
