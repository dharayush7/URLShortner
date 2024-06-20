const URL = require("../models/url");



async function listAllUrl(req, res) {
    return res.render("home");
}

async function handleSignUpRequest(req, res) {
    return res.render("signup");
}

async function handleLogInRequest(req, res) {
    return res.render("login");
}

module.exports = {
    listAllUrl,
    handleSignUpRequest,
    handleLogInRequest
}