const { query } = require('express');
const ApiError = require('../error/ApiError');

class GameController {
	async index(req, res) {
		res.json({message: 'Games index'});
	}

}

module.exports = new GameController();
