const express = require('express');
const User = require('../models/User.js'); // Убери .js, если не работает
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { login, email, userRole, password } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ login }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this login or email already exists.' });
        }

        const newUser = new User({
            login,
            email,
            userRole,
            passwordHash: password,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
