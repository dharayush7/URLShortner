const jwt = require("jsonwebtoken"); 
const seceret = "1C78D3E658AAc0473%_01z59_tw05u4i+n6u9r$hyonq*o!4hhi+yru@28yo6812E889EA546688A8";

function setUser(user) {
    const payload = {
        _id: user.id,
        email: user.email,
    }
    return jwt.sign(payload,seceret);
}

function getUser(token) {
    if (!token) return null;
    try{
        return jwt.verify(token, seceret);
    }
    catch (error){
        return null;
    }  
}


module.exports = {
    setUser,
    getUser
}