const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');
const shopRouter = require('./shopRouter');


router.use('/user', userRouter);// /api/user/
router.use('/games', gameRouter);// /api/games/
router.use('/shops', shopRouter);// /api/shops/

module.exports = router;
