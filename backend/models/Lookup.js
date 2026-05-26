const mongoose = require('mongoose');

const LookupSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  valid: {
    type: Boolean,
    default: true
  },
  countryCode: {
    type: String,
    default: ''
  },
  countryName: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  carrier: {
    type: String,
    default: 'Unknown'
  },
  lineType: {
    type: String,
    default: 'unknown'
  },
  spamScore: {
    type: Number,
    default: 0
  },
  riskLevel: {
    type: String,
    enum: ['Safe', 'Low', 'Medium', 'High'],
    default: 'Safe'
  },
  aiAnalysis: {
    type: String,
    default: ''
  },
  searchCount: {
    type: Number,
    default: 1
  },
  lastSearched: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Lookup', LookupSchema);
