const express = require('express');
const router = express.Router();
const Favorites = require('../models/Favourites');
const authMiddleware = require('../middleware/authMiddleware'); // Защита маршрута
const axios = require('axios'); // Используем для API-запроса

router.get('/', authMiddleware, async (req, res) => {
	try {
			const userId = req.user.userId; // Получаем ID пользователя из токена

			// Ищем все игры, добавленные в избранное этим пользователем
			const favorites = await Favorites.find({ userId });

			// Возвращаем список избранных игр
			return res.json(favorites);

	} catch (error) {
			console.error('Ошибка при получении избранного:', error);
			return res.status(500).json({ message: 'Ошибка сервера' });
	}
});

router.post('/add', authMiddleware, async (req, res) => {
	try {
			const { gameId } = req.body; // Извлекаем gameId из тела запроса
			const userId = req.user.userId; // Получаем ID пользователя из токена

			// Проверяем, есть ли игра уже в избранном
			const existingFavorite = await Favorites.findOne({ userId, gameId });
			if (existingFavorite) {
					return res.status(400).json({ message: 'Игра уже в избранном' });
			}

			// Получаем данные об игре через API
			const apiUrl = `https://api.isthereanydeal.com/games/info/v2?key=5e8d4290c6c71441eaa92017043f02c5d9e5e190&id=${gameId}`;
			const response = await axios.get(apiUrl);
			const gameData = response.data;

			// Преобразуем assets из объекта в массив строк
			const assetsArray = Object.values(gameData.assets);

			// Сохраняем в базу
			const favorite = new Favorites({
					userId, // Убедись, что userId извлечён из токена
					gameId,
					title: gameData.title,
					originalPrice: gameData.originalPrice,
					discountedPrice: gameData.discountedPrice,
					priceCurrency: gameData.priceCurrency || 'USD', // Значение по умолчанию
					shop: gameData.shop || 'Unknown', // Значение по умолчанию
					url: gameData.url || 'https://example.com', // Значение по умолчанию
					assets: assetsArray,
			});

			await favorite.save();
			return res.json({ message: 'Игра добавлена в избранное', favorite });

	} catch (error) {
			console.error('Ошибка при добавлении в избранное:', error);
			return res.status(500).json({ message: 'Ошибка сервера' });
	}
});



module.exports = router;