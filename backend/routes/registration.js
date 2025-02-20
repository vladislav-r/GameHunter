import express from 'express';
import User from './models/User.js'; // путь к модели
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { login, email, userRole, password } = req.body;

    try {
        // Проверяем, существует ли пользователь с таким логином или email
        const existingUser = await User.findOne({ $or: [{ login }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this login or email already exists.' });
        }

        // Создаем нового пользователя
        const newUser = new User({
            login,
            email,
            userRole,
            passwordHash: password, // пароль будет хешироваться в модели
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
