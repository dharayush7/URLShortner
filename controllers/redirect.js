const URL = require("../models/url");



// Redirect to URL
async function redirectToUrl(req, res) {
    const shortId = req.params.shortId
    const event = await URL.findOneAndUpdate({
        shortId,
    },{
        $push :{
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    });

    return res.redirect(event.redirectURL);
}

module.exports = {
    redirectToUrl,
}