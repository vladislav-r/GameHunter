const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

console.log(`API BASE_URL: ${API_BASE_URL}`);

const routes = {
	// games
	games: `${API_BASE_URL}/games`,
	gameInfo: ({ id }) => `${API_BASE_URL}/games/${id}`,
	// shops
	shops: `${API_BASE_URL}/shops`,
};

export default routes;
