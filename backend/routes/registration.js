const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Подключаем модель пользователя

router.post('/', async (req, res) => { // Это /api/registration/
    try {
        const { login, email, userRole, password } = req.body;

        // Проверка, есть ли уже пользователь
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Пользователь уже существует' });
        }

        // Создаём нового пользователя
		console.log('Создаём пользователя:', { login, email, userRole, password });
       
        const newUser = await User.create({
            login,
            email,
            userRole,
            password // Нужно хешировать пароль!
        });
        console.log(newUser.passwordHash)
        await newUser.save();
        res.status(201).json({ message: 'Регистрация успешна', user: newUser });

    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error });
    }
});

module.exports = router;