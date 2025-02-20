const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');
const shopRouter = require('./shopRouter');

//Registration
import User from './models/User.js';
import bcrypt from 'bcryptjs';


router.use('/user', userRouter);// /api/user/
router.use('/games', gameRouter);// /api/games/
router.use('/shops', shopRouter);// /api/shops/


//Registration router 
router.post('/register', async (req, res) => {
	const { login, email, userRole, password } = req.body;

	try {
			// Проверяем, существует ли пользователь с таким логином или email
			const existingUser = await User.findOne({ $or: [{ login }, { email }] });
			if (existingUser) {
					return res.status(400).json({ message: 'Пользователь с таким логином уже существует!' });
			}

			// Создаем нового пользователя
			const newUser = new User({
					login,
					email,
					userRole,
					passwordHash: password, // пароль будет хешироваться в модели
			});

			await newUser.save();
			res.status(201).json({ message: 'Пользователь успешно зарегестрирован!' });
	} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Server error' });
	}
});


module.exports = router;
