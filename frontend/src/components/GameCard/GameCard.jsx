import React, { useEffect, useState } from 'react';
import { getGameInfo, getGames } from '../../api';
import './GameCard.css';
import { Link } from 'react-router-dom';
import Loader from "../Loader/Loader";

function GameCard({ filters }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        // Здесь нужно получить список всех игр, например, через getGames
        const gamesData = await getGames();

        if (!Array.isArray(gamesData)) {
          throw new Error('Некорректный формат данных');
        }

        // Получаем информацию о каждой игре (включая теги) через getGameInfo
        const gamesWithTags = await Promise.all(
          gamesData.map(async (game) => {
            const gameInfo = await getGameInfo(game.id);
            return { ...game, tags: gameInfo.tags };
          })
        );

        setGames(gamesWithTags); // Сохраняем игры с тегами
      } catch (err) {
        console.error('Ошибка загрузки игр:', err);
        setError('Не удалось загрузить игры');
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  // if (loading) return <p>Загрузка...</p>;
  if (loading) return <Loader />;
  if (error) return <p className='error-message'>{error}</p>;
  if (!games.length) return <p className='error-message'>Нет доступных игр</p>;

  const filteredGames = games.filter((game) => {
    if (!game || typeof game !== 'object') return false;
  
    const gameTags = Array.isArray(game.tags) 
      ? game.tags.map(tag => tag.trim().toLowerCase()) 
      : [];
  
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.some((filterTag) => gameTags.includes(filterTag));
  
      const shopMatch =
      filters.shops.length === 0 ||
      filters.shops.some((shop) => game.shop?.includes(shop));
  
  
    // Фильтрация по цене
    const priceMatch =
      (!filters.priceFrom || game.discountedPrice >= parseFloat(filters.priceFrom)) &&
      (!filters.priceTo || game.discountedPrice <= parseFloat(filters.priceTo));
  

  
    return categoryMatch && shopMatch && priceMatch;
  });
  

  return (
    <div className="games-wrapper">
      <div className="games-inner">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <Link className="game" to={`/games/${game.id}`} key={game.id}>
              <div className="game-img">
                <img src={game.assets?.at(-1) || 'https://placehold.in/600x200'} alt={game.title} />
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
                  <a href={game.urls?.game} className="shop-button">
                    Купить
                  </a>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='error-message'>Игры не найдены по заданным фильтрам</p>
        )}
      </div>
    </div>
  );
}

export default GameCard;
