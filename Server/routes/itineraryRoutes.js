const express = require('express');
const router = express.Router();

// Route handler for /api/itinerary POST request
router.post('/', async (req, res) => {
    try {
      // Extract destination, date, and maxPrice from the request body
      const { destination, date, maxPrice, activityPreference, accommodationPreference } = req.body;
  
      // Log the received data
      console.log("Received data:", { destination, date, maxPrice, activityPreference, accommodationPreference });
  
      // Perform any necessary processing (e.g., call OpenAI API, generate itinerary, etc.)
  
      // For now, just send back a simple response indicating success
      res.json({ success: true, message: 'Itinerary request received' });
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  

module.exports = router;
