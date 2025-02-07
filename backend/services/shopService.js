const axios = require('axios');

class ShopService {
	// получение магазинов
	async fetchShops() {
		try {
			const response = await axios.get(
				`https://api.isthereanydeal.com/service/shops/v1?key=${process.env.IS_THERE_ANY_DEAL_API_KEY}`,
			);
			return response.data;
		} catch (error) {
			console.error('Error fetching shops:', error);
			return [];
		}
	}
}

module.exports = new ShopService();
