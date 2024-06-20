const express = require("express");

const { redirectToUrl } = require("../controllers/redirect");



const router = express.Router();

// redirect to url
router.get("/:shortId", redirectToUrl);

module.exports = router;