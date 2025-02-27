import { useState } from 'react';
import './FilterMenu.css';

const FilterMenu = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedShops, setSelectedShops] = useState([]);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  // Здесь можно сопоставить названия категорий с тегами из API
  const shops = ['Steam', 'GOG'];
  const categoryMap = {
    '5': 'RPG',
    '4': 'Action RPG',
    '3': 'Adventure',
    '2': 'Open World',
    '1': 'Horror',
    '6': 'Roguelike',
    '7': 'FPS',
    // Добавьте другие категории по аналогии
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const categories = Object.values(categoryMap);

  const handleShopChange = (shop) => {
    setSelectedShops((prev) =>
      prev.includes(shop) ? prev.filter((s) => s !== shop) : [...prev, shop]
    );
  };

  const handleSubmit = () => {
    // Здесь мы получаем не ID, а реальные названия категорий
    const selectedTags = selectedCategories.map(category => category.toLowerCase().trim());
  
    console.log("Selected Tags for filtering: ", selectedTags); // Должно вывести ['rpg', 'action rpg']
  
    onFilterChange({
      categories: selectedTags, // Передаем реальные названия тегов!
      shops: selectedShops,
      priceFrom,
      priceTo,
    });
  };

  return (
    <section className="menu-container">
      <div className="categories-container">
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
      </div>

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
              {shop}
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
