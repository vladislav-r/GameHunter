const Router = require('express');
const router = new Router();
const gameController = require('../controllers/gameController');

// /api/games/
router.get('/', gameController.getGames);
router.get('/:id', gameController.showGame);
router.get('/:id/price', gameController.getGamePrices);
router.get('/category', (req, res, next) => {
	console.log('Запрос попал в gameRouter');
	next();
});

module.exports = router;


// const Router = require('express');
// const router = new Router();
// const gameController = require('../controllers/gameController');

// console.log("✅ gameRouter загружен");

// // Проверяем, попадает ли запрос в маршруты
// router.get('/', (req, res) => {
//     console.log("📢 Вызван GET /api/games/");
//     gameController.getGames(req, res);
// });

// router.get('/:id', (req, res) => {
//     console.log(`📢 Вызван GET /api/games/${req.params.id}`);
//     gameController.showGame(req, res);
// });

// router.get('/:id/price', (req, res) => {
//     console.log(`📢 Вызван GET /api/games/${req.params.id}/price`);
//     gameController.getGamePrices(req, res);
// });

// router.get('/category', (req, res) => {
//     console.log("📢 Вызван GET /api/games/category");
//     gameController.getGameCategory(req, res);
// });

module.exports = router;

