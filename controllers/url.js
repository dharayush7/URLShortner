const shortid = require("shortid");


const URL = require("../models/url");



// Create a short URL
async function handelGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).end("Error: 404\n url requied");
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory:[],
        createdBy: req.user._id,
    });

    return res.render("home",{
        id: shortId
    });
}




module.exports = {
    handelGenerateNewShortUrl,
}