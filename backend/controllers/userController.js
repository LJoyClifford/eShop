import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

//Auth user get token
//POST /api/users/login
//Public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user');
});

//register user 
//POST /api/users
//Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});

//logout user / clear cookie
//POST /api/users/logout
//Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});

//get user profile
//GET /api/users/profile
//Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});

//update user profile
//PUT /api/users/profile
//Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
});

//get users
//GET /api/users
//Private/admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get user');
});

//get user by ID
//GET /api/users
//Private/admin
const getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by ID');
});

//delete users
//DELETE /api/users
//Private/admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user');
});

//get update user
//PUT /api/users/:id
//Private/admin
const updateUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
}

