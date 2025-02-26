const axios = require('axios');

class GameService {
	// получение списка игр со скидками (Самой лучшей скидкой)
	async fetchDiscountsFromIsThereAnyDeal(shops = '61', sort = 'rank') {
		try {
			const response = await axios.get(
				`https://api.isthereanydeal.com/deals/v2?sort=${sort}&shops=${shops},35&key=${process.env.IS_THERE_ANY_DEAL_API_KEY}`,
			);
			return response.data.list; // Здесь будут скидки
		} catch (e) {
			console.error('Error fetching discounts:', e);
			return [];
		}
	}
	// Объединение данных с разных API
	async fetchAllGamesWithDiscounts(shops, sort) {
		const discounts = await this.fetchDiscountsFromIsThereAnyDeal(shops, sort);

		// Логика объединения данных (например, по названию игры)
		// Это нужно уточнить в зависимости от структуры данных.
		return discounts.map(discount => ({
			id: discount.id,
			title: discount.title,
			assets: [
				discount.assets.banner145,
				discount.assets.banner300,
				discount.assets.banner400,
				discount.assets.banner600,
			],
			originalPrice: discount.deal.regular.amount,
			discountedPrice: discount.deal.price.amount,
			priceCurrency: discount.deal.price.currency,
			shop: discount.deal.shop.name,
			url: discount.deal.url,
		}));
	}

	// получение инфы игры
	async fetchGameInfo(id) {
		try {
			const response = await axios.get(
				`https://api.isthereanydeal.com/games/info/v2?key=5e8d4290c6c71441eaa92017043f02c5d9e5e190&id=${id}`,
			);
			return response.data;
		} catch (error) {
			console.error('Error fetching game info:', error);
			return [];
		}
	}

	// получение цен игры
	async fetchGamePrices(id) {
		try {
			const response = await axios.post(
				`https://api.isthereanydeal.com/games/prices/v3?key=${process.env.IS_THERE_ANY_DEAL_API_KEY}`,
				[id],
				{ headers: { 'Content-Type': 'application/json' } },
			);
			return response.data;
		} catch (error) {
			console.error('Error fetching game info:', error);
			return [];
		}
	}

// Получение категории игры 
	async fetchGameCategory(id) {
		try {
			const response = await axios.post(
				`https://api.isthereanydeal.com/collection/groups/v1?key=${process.env.IS_THERE_ANY_DEAL_API_KEY}`,
				{ids: [id]},
				{ headers: { 'Content-Type': 'application/json' } },
			);
			return response.data;
		} catch (error) {
			console.error('Error fetching game info:', error);
			return [];
		}
	}
	}


module.exports = new GameService();
