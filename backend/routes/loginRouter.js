const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Путь к модели User

const router = express.Router();

// Маршрут для входа
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден' });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль!' });
        }

        const token = jwt.sign(
            { userId: user._id, userRole: user.userRole },
            'secret-key',
            { expiresIn: '1h' }
        );

        res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; // Используем module.exports для экспорта маршрута
