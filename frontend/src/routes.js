const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

console.log(`API BASE_URL: ${API_BASE_URL}`);

const routes = {
	games: `${API_BASE_URL}/games`,
	gameInfo: ({ id }) => `${API_BASE_URL}/games/${id}`,
};

export default routes;
