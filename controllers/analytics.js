const URL = require("../models/url");


// Get analytics of URL
async function handelGetAnalytics(req, res) {
    const user = req.user;
    if (!user) return res.redirect("/login");
    const allurls = await URL.find({
        createdBy: user._id,
    });

    return res.render("analytics", { urls: allurls });
}

module.exports = {
    handelGetAnalytics,
}