const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
	process.env.GameHunter, // Название БД
	process.env.root, // Пользователь
	process.env.root123, // ПАРОЛЬ
	{
		dialect: 'postgres',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
	},
);
