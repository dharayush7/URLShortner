const express = require("express");

const { listAllUrl, handleSignUpRequest, handleLogInRequest } = require("../controllers/home");


const router = express.Router();

router.get("/", listAllUrl);

router.get("/signup",handleSignUpRequest)

router.get("/login", handleLogInRequest)


module.exports = router;