const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');
const shopRouter = require('./shopRouter');
const registration = require('./registration');
const login = require('./login');

router.use('/user', userRouter);// /api/user/
router.use('/games', gameRouter);// /api/games/
router.use('/shops', shopRouter);// /api/shops/
router.use('/registration', registration);
router.use('/login', login);

module.exports = router;
