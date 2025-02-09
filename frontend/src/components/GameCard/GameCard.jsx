import React, { useEffect, useState } from 'react';
import { getGames } from '../../api';
import Game from '../Game/Game';
import './GameCard.css'
function GameCard(){
	const [games, setGames] = useState([]);

	useEffect(() => {
		const loadGames = async () => {
			try {
				const gamesData = await getGames();
				setGames(gamesData);
			} catch (error) {
				console.error('Failed to load games:', error);
			}
		};

		loadGames();
	}, []);

	return (
			<a className='games-inner' path='/game' component={Game} href>
				{games.map(game => (
					<div className='game' key={game.id}>
						<div className='game-img'>
							<img
								src={game.assets.at(-1) ?? 'https://placehold.in/600x200'}
								alt=''
							/>
						</div>
						<div className='game-info'>
							<div className='info-top'>
								<h3>{game.title}</h3>
								<p>{game.shop}</p>
							</div>
							<div className='info-bottom'>
								<div className="info-price">
									<p className="original-price">
										${game.originalPrice}
									</p>
									<p className="discounted-price">
										${game.discountedPrice} 
									</p>
								</div>
								<a href={game.url} className='shop-button'>Купить</a>
							</div>
						</div>
					</div>
				))}
			</a>
	)
}

export default GameCard;