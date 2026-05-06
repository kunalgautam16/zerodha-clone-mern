const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../schemas/UserSchema");

router.post("/signup", async (req, res)=>{
    const {email, password, username} = req.body;

    const user = await User.findOne({email});
    if(user) return res.json({msg: "User exists"});

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
        email,
        password: hashed,
        username
    });

    res.json({msg: "Signup success"});
});

router.post("/login", async (req, res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) return res.json({msg: "Invalid email"});

    const valid = await bcrypt.compare(password, user.password);
    if(!valid) return res.json({msg: "Invalid password"});

    const token = jwt.sign(
    { 
        id: user._id,
        role: user.role
    },
    process.env.JWT_SECRET
    );
    res.cookie("token", token, {httpOnly: true});

    res.json({msg: "Login success"});
});



module.exports = router;