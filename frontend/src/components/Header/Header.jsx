import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Проверяем, авторизован ли пользователь

    // Безопасный парсинг JSON
    let user = null;
    try {
        const userData = localStorage.getItem('user');
        if (userData) {
            user = JSON.parse(userData); // Пытаемся распарсить данные пользователя
        }
    } catch (error) {
        console.error('Ошибка при парсинге данных пользователя:', error);
        localStorage.removeItem('user'); // Удаляем повреждённые данные
    }

    const handleLogout = () => {
        localStorage.removeItem('token'); // Удаляем токен
        localStorage.removeItem('user'); // Удаляем данные пользователя
        navigate('/'); // Перенаправляем на главную страницу
        window.location.reload(); // Перезагружаем страницу, чтобы обновить состояние
    };

    return (
        <header className='container'>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/streams">Стримы</Link></li>
                    <li><Link to="/store">Магазин</Link></li>
                    <li><Link to="/news">Новости</Link></li>
                    {token ? (
                        <>
                            <li><Link to="/profile">{user?.login}</Link></li> {/* Отображаем логин */}
                            <li><button onClick={handleLogout}>Выйти</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/registration">Регистрация</Link></li>
                            <li><Link to="/login">Вход</Link></li>
                        </>
                    )}
                </ul>
            </nav>
            <div className="user-container">
                {/* Здесь можно добавить аватар или другие элементы */}
            </div>
        </header>
    );
};

export default Header;