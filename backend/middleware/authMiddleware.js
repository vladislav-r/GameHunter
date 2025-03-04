const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Берём токен из заголовка

    if (!token) {
        return res.status(401).json({ message: 'Нет авторизации' });
    }

    try {
        const decoded = jwt.verify(token, 'secret-key'); // Расшифровываем токен
        req.user = decoded; // Добавляем данные пользователя в req
        next(); // Передаём управление дальше
    } catch (e) {
        return res.status(401).json({ message: 'Неверный токен' });
    }
};