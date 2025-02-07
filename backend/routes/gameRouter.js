const Router = require('express');
const router = new Router();
const gameController = require('../controllers/gameController');

// /api/games/
router.get('/', gameController.getGames);
router.get('/:id', gameController.showGame);
router.get('/:id/price', gameController.getGamePrices);
router.get('/shops', gameController.getGamePrices);

module.exports = router;
