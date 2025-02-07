# GameHunter

Приложение, которое помогает пользователям отслеживать скидки на игры в популярных магазинах (Steam, Epic Games Store, GOG и т. д.). Пользователи могут добавлять игры в избранное, чтобы получать уведомления о скидках.

## Инструкция

#### Backend <br>

`cp .env.example .env` - потом вставить подключение к БД<br>
`npm install` - установка зависимостей <br>
`npm run dev` - запуск сервера <br>


#### Frontend <br>

`cp .env.example .env` - ничего менять не надо, если сервер запустится на порту 5000<br>
`npm install` - установка зависимостей <br>
`npm start` - запуск клиента <br>


## Эндпоинты к API <br>

#### Games
`method: GET, url: /api/games` - получение списка игр со скидками<br>
`method: GET, url: /api/games/?id` - получение инфы по игре<br>
`method: GET, url: /api/games/?id/price` - получение цен по игре<br>

#### Shops
`method: GET, url: /api/shops` - получение списка магазинов<br>

#### User (разработка)
`method: POST, url: /api/user/register`<br>
`method: POST, url: /api/user/login`<br>
`method: GET, url: /api/user/auth?id=`<br>