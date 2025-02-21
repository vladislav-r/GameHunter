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
// 	категории

	// async fetchCategory() {
	// 	try {
	// 				const response = await axios.post(
	// 					`https://api.isthereanydeal.com/collection/groups/v1??key=${process.env.IS_THERE_ANY_DEAL_API_KEY}`,
	// 					// [id],
	// 					// { headers: { 'Content-Type': 'application/json' } },
	// 				);
	// 				return response.data;
	// 			} catch (error) {
	// 				console.error('Error fetching game info:', error);
	// 				return [];
	// 			}
	// }
}

module.exports = new ShopService();
