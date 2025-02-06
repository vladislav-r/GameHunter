const gameService = require("../services/gameService");

class GameController {
	async getGames(req, res) {
		const {shops, sort} = req.query;
		try {
			const gamesWithDiscounts = await gameService.fetchAllGamesWithDiscounts(shops, sort);
			res.json(gamesWithDiscounts);
		} catch (error) {
			console.error('Error in getDiscountedGames:', error);
			res.status(500).json({ message: 'Failed to fetch discounted games' });
		}
	}
}

module.exports = new GameController();
