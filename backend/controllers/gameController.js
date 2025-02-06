class GameController {
	async getGames(req, res) {
		const games = [
			{ id: 1, name: 'Game One', price: 19.99 },
			{ id: 2, name: 'Game Two', price: 29.99 },
			{ id: 3, name: 'Game Three', price: 39.99 },
		];
		res.json(games);
	}
}

module.exports = new GameController();
