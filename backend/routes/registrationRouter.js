const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Путь к модели User
const jwt = require('jsonwebtoken');

const router = express.Router();

// Маршрут для регистрации
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
            passwordHash: password, // Пароль будет хешироваться в модели
        });

        await newUser.save();
        res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; // Используем module.exports для экспорта маршрута
