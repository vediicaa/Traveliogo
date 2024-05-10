const express = require('express');
const router = express.Router();

// Define route handlers
router.get('/', (req, res) => {
    res.send('This is a sample route!');
});

module.exports = router;
