import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameInfo } from '../../api';
import './GameInfo.css';

function GameInfo() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameInfo = async () => {
      try {
        const gameData = await getGameInfo(id);
        setGame(gameData);
      } catch (err) {
        setError('Ошибка загрузки данных игры');
      } finally {
        setLoading(false);
      }
    };

    fetchGameInfo();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!game) return <p>Игра не найдена</p>;

  return (
    <div className="game-layout">
		<div className="game-content">
			<img src={game.assets?.boxart || 'https://placehold.in/600x200'} alt={game.title} className="game-image" />	
			<a href={game.urls.game} target="_blank" rel="noopener noreferrer" className="shop-button">Купить</a>
		</div>
	  <div className="game-info-layout">
		<h2>{game.title}</h2>
		<p><strong>Разработчик:</strong> {game.developers.map(dev => dev.name).join(', ')}</p>
		<p><strong>Издатель:</strong> {game.publishers.map(pub => pub.name).join(', ')}</p>
		<p><strong>Дата выхода:</strong> {game.releaseDate}</p>
		<p><strong>Категории:</strong> {game.tags.join(', ')}</p>
		<p><strong>Платформы:</strong> {game.shop?.join(', ') || 'Не указано'}</p>
		<p><strong>Рейтинг:</strong> {game.reviews[0]?.score} / 100 ({game.reviews[0]?.count} оценок, {game.reviews[0]?.source})</p>
		<p><strong>Недавние игроки:</strong> {game.players.recent} | Пик: {game.players.peak}</p>
		<p><strong>Собрали в коллекции:</strong> {game.stats.collected} | В листе ожидания: {game.stats.waitlisted}</p>
	  </div>
      
    </div>
  );
}

export default GameInfo;
