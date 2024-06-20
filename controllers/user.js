const User = require("../models/user");
const { setUser } = require("../services/auth")

async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name, email, password
    });
    return res.redirect("/login");
}

async function handleUserLogIn(req, res) {
    const { email, password } = req.body;
    const result = await User.findOne({
        email, password
    });

    if (!result) return res.render("login", {
        error: "Invalid Email or Password"
    });

    const token = setUser(result);

    res.cookie('uid', token);

    return res.redirect("/");
}


module.exports = {
    handleUserSignUp,
    handleUserLogIn
}