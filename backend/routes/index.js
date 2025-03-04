const Router = require('express');
const mongoose = require('mongoose');
const router = new Router();
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');
const shopRouter = require('./shopRouter');
const registrationRouter = require('./registrationRouter');
const loginRouter = require('./loginRouter');
const favoriteRouter = require('./favoriteRouter');


router.use('/user', userRouter);// /api/user/
router.use('/games', gameRouter);// /api/games/
router.use('/shops', shopRouter);// /api/shops/
router.use('/registration', registrationRouter); // /api/register
router.use('/login', loginRouter); // /api/login 
router.use('/favorites', favoriteRouter);//api/favorites/add - add game


// Подключаем MongoDB
mongoose.connect('mongodb://localhost:27017/GameHunter')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));


module.exports = router;
