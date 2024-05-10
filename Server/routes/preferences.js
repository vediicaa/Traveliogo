const express = require('express');
const router = express.Router();

// POST route for user preferences
router.post('/', (req, res) => {
  try {
    // Extract preferences from the request body
    const {
      climatePreference,
      countryPreference,
      activityPreference,
      accommodationPreference,
      travelStylePreference,
      foodPreference,
      interestHobbies,
      transportationPreference,
      specialRequirements,
      languagePreference,
      travelDatesFlexibility,
      localEventsInterest
      // Add more preferences here
    } = req.body;

    // Log the received preferences
    console.log('Received preferences:');
    console.log('Climate Preference:', climatePreference);
    console.log('Country Preference:', countryPreference);
    console.log('Activity Preference:', activityPreference);
    console.log('Accommodation Preference:', accommodationPreference);
    console.log('Travel Style Preference:', travelStylePreference);
    console.log('Food Preference:', foodPreference);
    console.log('Interest and Hobbies:', interestHobbies);
    console.log('Transportation Preference:', transportationPreference);
    console.log('Special Requirements:', specialRequirements);
    console.log('Preferred Language:', languagePreference);
    console.log('Travel Dates Flexibility:', travelDatesFlexibility);
    console.log('Local Events Interest:', localEventsInterest);
    // Add more console.log statements for additional preferences

    // You can perform further processing here, such as saving preferences to a database
    // For now, just send back a simple response indicating success
    res.json({ success: true, message: 'Preferences received' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
