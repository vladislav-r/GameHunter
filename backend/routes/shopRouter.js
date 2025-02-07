const Router = require('express');
const router = new Router();
const shopController = require('../controllers/shopController');

// /api/shops/
router.get('/', shopController.getShops);

module.exports = router;
