import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login'); // Если пользователь не авторизован, перенаправляем на вход
                    return;
                }

                // Получаем данные пользователя
                const userResponse = localStorage.getItem('user');
                setUserData(userResponse);
                console.log(userResponse);

                // Получаем избранные игры
                const favoritesResponse = await axios.get('http://localhost:5000/api/favorites', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setFavorites(favoritesResponse.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData();
    }, [navigate]);

    if (!userData) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h1>Личный кабинет</h1>
            <p>Логин: {userData.login}</p>
            <p>Дата регистрации: {new Date(userData.createdAt).toLocaleDateString()}</p>

            <h2>Избранные игры</h2>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((game) => (
                        <li key={game._id}>{game.title}</li>
                    ))}
                </ul>
            ) : (
                <p>У вас пока нет избранных игр.</p>
            )}
        </div>
    );
};

export default Profile;