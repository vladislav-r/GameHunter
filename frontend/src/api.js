import axios from 'axios';
import routes from './routes';

export const getGames = async () => {
	try {
		const response = await axios.get(routes.games);
		return response.data;
	} catch (error) {
		console.error('Ошибка запроса всех игр:', error);
		throw error;
	}
};
export const getGameInfo = async id => {
	try {
		const response = await axios.get(routes.gameInfo, id);
		return response.data;
	} catch (error) {
		console.error('Ошибка запроса всех игр:', error);
		throw error;
	}
};

export const getShops = async () => {
	try {
		const response = await axios.get(routes.shops);
		return response.data;
	} catch (e) {
		console.error('Ошибка запроса магазинов:', e);
		throw e;
	}
};
