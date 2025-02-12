const gameService = require('../services/gameService');

class GameController {
	async getGames(req, res) {
		const { shops, sort } = req.query;
		try {
			const gamesWithDiscounts = await gameService.fetchAllGamesWithDiscounts(shops, sort);
			res.json(gamesWithDiscounts);
		} catch (error) {
			console.error('Error in fetchAllGamesWithDiscounts:', error);
			res.status(500).json({ message: 'Failed to fetch discounted games' });
		}
	}
	async showGame(req, res) {
		const { id } = req.params;
		try {
			const gameInfo = await gameService.fetchGameInfo(id);
			res.json(gameInfo);
		} catch (error) {
			console.error('Error in showGame:', error);
			res.status(500).json({ message: 'Failed to fetch game info' });
		}
	}
	async getGamePrices(req, res) {
		const { id } = req.params;
		try {
			const gamePrices = await gameService.fetchGamePrices(id);
			res.json(gamePrices);
		} catch (e) {
			console.error('Error in getGamePrices:', e);
			res.status(500).json({ message: 'Failed to fetch game info' });
		}
	}


	async getGameCategory(req, res) {

		console.log('Запрос на получение категорий:', req.query);
		const { id } = req.query;
		if (!id) {
			return res.status(400).json({ message: 'Game ID is required' });
	}
		try {
			const gameCategory = await gameService.fetchGameCategory(id);
			console.log('Ответ от сервиса категорий:', gameCategory);
			res.json(gameCategory);
		} catch(e) {
			console.error('Error in getGameCategory:', e);
			res.status(500).json({message: 'Failed to fetch game info'})
		}

// 	async getGameCategory(req, res) {
//     console.log("✅ Функция getGameCategory вызвана");
    
//     const { id } = req.params;
//     console.log(`📢 ID категории: ${id}`);

//     try {
//         const gameCategory = await gameService.fetchGameCategory(id);
//         console.log("📢 Данные из API:", gameCategory);
//         res.json(gameCategory);
//     } catch (e) {
//         console.error('❌ Ошибка в getGameCategory:', e);
//         res.status(500).json({ message: 'Failed to fetch game categories' });
//     }
// }
		
	
	}
}



	

module.exports = new GameController();
