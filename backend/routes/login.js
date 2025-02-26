import express from 'express';
import User from '../models/User.js'; // Путь к модели User
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Маршрут для входа
router.post('/login', async (req, res) => {
    const { login, password } = req.body; // Получаем login и password из тела запроса

    try {
        // Проверка, существует ли пользователь с таким логином
        const user = await User.findOne({ login });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Проверка пароля
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Создание JWT
        const token = jwt.sign(
            { userId: user._id, userRole: user.userRole },  // Payload (данные для токена)
            'secret-key', // секретный ключ для подписи (в реальном приложении лучше хранить в env)
            { expiresIn: '1h' } // Время жизни токена
        );

        // Отправляем токен пользователю
        res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
