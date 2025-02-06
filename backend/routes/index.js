const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');

// /api/user/
router.use('/user', userRouter);

// /api/games/
router.use('/games', gameRouter)

module.exports = router;
