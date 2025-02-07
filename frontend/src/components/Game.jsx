import { getGameInfo } from '../api';

function Game({ id }) {
	return (
		<div className='game'>
			<div className='container'>{id}</div>
		</div>
	);
}

export default Game;
