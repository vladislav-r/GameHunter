import { useState } from 'react';
import './FilterMenu.css';

const FilterMenu = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedShops, setSelectedShops] = useState([]);
  const [priceFrom, setPriceFrom] = useState('');

  const [priceTo, setPriceTo] = useState('');

  const categories = ['Инди', 'Приключения', 'ММО', 'Казуальные игры', 'Стратегии', 'Симуляторы', 'Спортивные игры'];
  const platforms = ['Steam', 'GOG', 'Epic Games', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'];
  const shops = ['Steam', 'GOG']; // Можно подставить те, что возвращает API

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  const handleShopChange = (shop) => {
    setSelectedShops((prev) =>
      prev.includes(shop) ? prev.filter((s) => s !== shop) : [...prev, shop]
    );
  };

  const handleSubmit = () => {
    onFilterChange({
      categories: selectedCategories,
      platforms: selectedPlatforms,
      shops: selectedShops,
      priceFrom,
      priceTo,
    });
  };

  return (
    <section className="menu-container">
      {/* <div className="categories-container">
        <h3>Категории</h3>
        {categories.map((category) => (
          <div className="category-item" key={category}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="checkmark"></span>
              {category}
            </label>
          </div>
        ))}
      </div> */}

      {/* <div className="platform-container">
        <h3>Платформы</h3>
        {platforms.map((platform) => (
          <div className="category-item" key={platform}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={selectedPlatforms.includes(platform)}
                onChange={() => handlePlatformChange(platform)}
              />
              <span className="checkmark"></span>
              {platform}
            </label>
          </div>
        ))}
      </div> */}

      <div className="shop-container">
        <h3>Магазины</h3>
        {shops.map((shop) => (
          <div className="category-item" key={shop}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={selectedShops.includes(shop)}
                onChange={() => handleShopChange(shop)}
              />
              <span className="checkmark"></span>
              <span className="shop-name">{shop}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="price-container">
        <h3>Цены</h3>
        <div className="price-filter">
          <input
            type="number"
            placeholder="от"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
          />
          <p>-</p>
          <input
            type="number"
            placeholder="до"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Применить фильтры</button>
      </div>
    </section>
  );
};

export default FilterMenu;
