const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register User
exports.registerUser = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
            }

        const user = await User.create({ fullName, email, password, profileImageUrl });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user', error: err.message });
    }
       
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
};

// Register User
exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user info', error: err.message });
    }
};

// Update User Profile
exports.updateProfile = async (req, res) => {
    try {
        const { fullName, profileImageUrl } = req.body;
        const user = await User.findById(req.user.id);

        if (user) {
            user.fullName = fullName || user.fullName;
            user.profileImageUrl = profileImageUrl || user.profileImageUrl;

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                fullName: updatedUser.fullName,
                email: updatedUser.email,
                profileImageUrl: updatedUser.profileImageUrl,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating profile', error: err.message });
    }
};