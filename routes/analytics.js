const express = require("express");

const { handelGetAnalytics } = require("../controllers/analytics");




const router = express.Router();

// get analytic of URL
router.get("/", handelGetAnalytics);

module.exports = router;