const express = require('express');
const router = express.Router();
const lookupController = require('../controllers/lookupController');

// Phone Lookup Route
router.get('/lookup/:number', lookupController.lookupNumber);

// Report Caller Route
router.post('/report', lookupController.reportNumber);

// Global Stats Route
router.get('/stats', lookupController.getStats);

// Contact Submission Route (Direct handler)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields (name, email, message) are required.' });
  }

  console.log(`✉️ Received Contact Submission:
Name: ${name}
Email: ${email}
Message: ${message}`);

  return res.status(200).json({
    success: true,
    message: 'Thank you for contacting CallNexa. Our team has received your message.'
  });
});

module.exports = router;
