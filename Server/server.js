// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const sampleRoute = require('./routes/sampleRoute');
const itineraryRoutes = require('./routes/itineraryRoutes.js');
const preferencesRouter = require('./routes/preferences.js');
// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// Define middleware to parse JSON requests
app.use(express.json());
app.use(bodyParser.json());
app.use('/sample', sampleRoute);
app.use('/api/itinerary', itineraryRoutes);
app.use('/api/preferences', preferencesRouter);

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Travel Itinerary Server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
