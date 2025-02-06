import React, { useEffect, useState } from 'react';
import { getGames } from './api';

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
      <div>
        <h1>Game Discounts</h1>
        <ul>
          {games.map((game) => (
              <li key={<game className="id"></game>}>
                {game.name} - ${game.price}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
