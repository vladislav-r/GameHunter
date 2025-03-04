import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		login: '',
		email: '',
		userRole: 'user',
		password: '',
	});


	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:5000/api/registration', formData);
			localStorage.setItem('token', response.data.token); // Сохраняем токен
			localStorage.setItem('user', JSON.stringify(response.data.user)); // Сохраняем данные пользователя
			navigate('/'); // Перенаправление на страницу входа
		} catch (error) {
			console.error('Ошибка при регистрации:', error);
		}
	};

	return (
		<div className="auth-container">
			<h2>Регистрация</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" name="login" placeholder="Логин" value={formData.login} onChange={handleChange} required />
				<input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
				<select name="userRole" value={formData.userRole} onChange={handleChange}>
					<option value="user">Пользователь</option>
					<option value="admin">Администратор</option>
				</select>
				<input type="password" name="password" placeholder="Пароль" value={formData.password} onChange={handleChange} required />
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	);
};

export default RegisterForm;