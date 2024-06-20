const express = require("express");

const { handelGenerateNewShortUrl } = require("../controllers/url");



const router = express.Router();


// Create a Short URL
router.post("/",handelGenerateNewShortUrl);


module.exports = router;