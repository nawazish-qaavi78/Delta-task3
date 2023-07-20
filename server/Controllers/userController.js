const asyncHandler = require('express-async-handler');
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
// const { generateToken } = require('../utils/generateToken.js');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(404);
        throw new Error("User Already Exists");
    }
    const user = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            // token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Error Occured!');
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
})



module.exports = {registerUser, authUser};