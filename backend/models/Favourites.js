const mongoose = require('mongoose');

const FavouritesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Ссылка на пользователя
        ref: 'User',
        required: true,
    },
    gameId: {
        type: String, // ID игры
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    originalPrice: {
        type: Number,
        default: 0,
    },
    discountedPrice: {
        type: Number,
        default: 0,
    },
    priceCurrency: {
        type: String,
        default: 'USD',
    },
    shop: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    assets: {
			type: Object, // Теперь assets может быть объектом
			default: {},
	},
});

module.exports = mongoose.model('Favourites', FavouritesSchema);