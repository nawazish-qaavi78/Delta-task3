import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';


//route     POST /api/users
//access    Public
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
        password
    });
    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error('Error Occured!');
    }
});

// Route   /api/users/getUserData
// Access  Public
const getUserData = asyncHandler(async(req, res)=>{
    const token = req.cookies.jwt;
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const data = await User.findById(decoded.userId).select('-password');
            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }
})


// route    POST /api/users/auth
// access   Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
});


// route   POST /api/users/logout
// access   Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: 'LoggedOut User' });
});


//route     GET api/users/:userId/profile
// access   Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (user) {
        res.json({
            name: user.name,
        })
    }
});

// route   PUT /api/users/:userId/profile
// access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updateUser = await user.save();
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
})



export { registerUser, authUser, logoutUser, updateUserProfile, getUserProfile, getUserData };