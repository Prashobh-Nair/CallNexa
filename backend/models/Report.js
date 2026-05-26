const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    index: true
  },
  reason: {
    type: String,
    required: true,
    enum: ['telemarketing', 'robocall', 'phishing', 'scam', 'harassment', 'spoofing', 'other']
  },
  description: {
    type: String,
    maxLength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Report', ReportSchema);
