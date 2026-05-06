const jwt = require("jsonwebtoken");
const User = require("../schemas/UserSchema");

const verifyUser = async (req, res, next)=>{
    const token = req.cookies.token;

    if(!token) return res.json({status: false});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch full user from DB
        const user = await User.findById(decoded.id);

        if(!user) return res.json({status: false});

        req.user = user;   // now contains username, email, etc.

        next();
    } catch(err){
        return res.json({status: false});
    }
};

module.exports = verifyUser;