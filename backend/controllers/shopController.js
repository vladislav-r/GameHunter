const shopService = require('../services/shopService');

class ShopController {
	async getShops(req, res) {
		try {
			const shops = await shopService.fetchShops();
			res.json(shops);
		} catch (error) {
			console.error('Error in fetchShops:', error);
			res.status(500).json({ message: 'Failed to fetch shops' });
		}
	}
}

module.exports = new ShopController();
