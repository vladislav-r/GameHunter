import React, {useEffect, useState} from 'react';
import {getGames} from './api';

const GamesStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
}
const GameStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}

function App() {
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
        <div className="games">
            <div className="container">
                <h1>Game Discounts</h1>

                <div className="games-inner" style={GamesStyle}>
                    {games.map((game) => (
                        <div className="game" style={GameStyle} key={game.id}>
                            <div className="game-img" style={{height: '50%'}}>
                                <img style={{width: '100%', height: '100%', objectFit: "cover"}} src={game.assets.at(-1) ?? 'https://placehold.in/600x200'} alt=""/>
                            </div>
                            <div>
                                <h3>{game.title}</h3>
                                <p>{game.originalPrice} <span>{game.priceCurrency}</span></p>
                                <p>Со скидкой: {game.discountedPrice} <span>{game.priceCurrency}</span></p>
                                <a href={game.url}>{game.shop}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
