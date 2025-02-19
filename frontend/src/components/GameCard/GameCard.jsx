import React, { useEffect, useState } from 'react';
import { getGames } from '../../api';
import './GameCard.css';

function GameCard({ filters }) {
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

  const filteredGames = games.filter((game) => {
    const categoryMatch =
      filters.categories.length === 0 || filters.categories.some((cat) => game.categories.includes(cat));

    const platformMatch =
      filters.platforms.length === 0 || filters.platforms.some((platform) => game.platforms.includes(platform));

    const shopMatch =
      filters.shops.length === 0 || filters.shops.includes(game.shop);

    const priceMatch =
      (!filters.priceFrom || game.discountedPrice >= parseFloat(filters.priceFrom)) &&
      (!filters.priceTo || game.discountedPrice <= parseFloat(filters.priceTo));

    return categoryMatch && platformMatch && shopMatch && priceMatch;
  });

  return (
    <div className="games-wrapper">
      <div className="games-inner">
        {filteredGames.map((game) => (
          <div className="game" key={game.id}>
            <div className="game-img">
              <img src={game.assets.at(-1) ?? 'https://placehold.in/600x200'} alt={game.title} />
            </div>
            <div className="game-info">
              <div className="info-top">
                <h3>{game.title}</h3>
                <p>{game.shop}</p>
              </div>
              <div className="info-bottom">
                <div className="info-price">
                  <p className="original-price">${game.originalPrice}</p>
                  <p className="discounted-price">${game.discountedPrice}</p>
                </div>
                <a href={game.url} className="shop-button">
                  Купить
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameCard;
