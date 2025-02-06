const axios = require('axios');

class GameService {
    async fetchGamesFromSteam() {
        try {
            const response = await axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
            return response.data.applist.apps; // Это общий список игр. Скидки нужно получать отдельно.
        } catch (error) {
            console.error('Error fetching games from Steam:', error);
            return [];
        }
    }
    async fetchDiscountsFromIsThereAnyDeal(shops = '61', sort = 'rank') {
        try{
            const response = await axios.get(`https://api.isthereanydeal.com/deals/v2?sort=${sort}&shops=${shops},35&key=${process.env.IS_THERE_ANY_DEAL_API_KEY}`);
            return response.data.list // Здесь будут скидки
        } catch (e){
            console.error('Error fetching discounts:', e);
            return [];
        }
    }
    // Объединение данных с разных API
    async fetchAllGamesWithDiscounts(shops, sort) {
        // const steamGames = await this.fetchGamesFromSteam();
        const discounts = await this.fetchDiscountsFromIsThereAnyDeal(shops, sort);

        // Логика объединения данных (например, по названию игры)
        // Это нужно уточнить в зависимости от структуры данных.
        return discounts.map((discount) => ({
            id: discount.id,
            title: discount.title,
            assets: [
                discount.assets.banner145,
                discount.assets.banner300,
                discount.assets.banner400,
                discount.assets.banner600,
            ],
            originalPrice: discount.deal.regular.amount,
            discountedPrice: discount.deal.price.amount,
            priceCurrency: discount.deal.price.currency,
            shop: discount.deal.shop.name,
            url: discount.deal.url,
        }));
    }
}


module.exports = new GameService();