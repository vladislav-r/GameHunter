const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');
const shopRouter = require('./shopRouter');

// /api/user/
router.use('/user', userRouter);

// /api/games/
router.use('/games', gameRouter);

// /api/shops/
router.use('/shops', shopRouter);

module.exports = router;
