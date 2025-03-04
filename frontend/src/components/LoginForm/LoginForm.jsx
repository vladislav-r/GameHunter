import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './LoginForm.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Состояние для ошибки
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Сбрасываем ошибку перед отправкой запроса

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                password,
            });

            // Сохраняем токен и данные пользователя
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Перенаправляем на главную страницу
            navigate('/');
        } catch (error) {
            console.error('Ошибка при входе:', error);
            setError('Неверный email или пароль'); // Устанавливаем сообщение об ошибке
        }
    };

    return (
			<div className='login-container'>
        <form onSubmit={handleSubmit}>
            <h2>Вход</h2>
            {error && <p className="error-message">{error}</p>} {/* Отображаем ошибку */}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Войти</button>
        </form>
				</div>
    );
};

export default LoginForm;