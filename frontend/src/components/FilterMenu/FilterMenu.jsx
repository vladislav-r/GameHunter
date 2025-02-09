import './FilterMenu.css';
const FilterMenu = () => {
	return (
		<section className='menu-container'>
			<div className="categories-container">
				<h3>Категории</h3>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Инди
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Приключения
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						ММО
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Казуальные игры
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Стратегии
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Симуляторы
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Спортивные игры
					</label>
				</div>
			</div>
			<div className="platform-container">
				<h3>Платформы</h3>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Steam
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						GOG
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Epic Games
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						PlayStation 4
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						PlayStation 5
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Xbox One
					</label>
				</div>
				<div className="category-item">
					<label class="custom-checkbox">
						<input type="checkbox"/>
						<span class="checkmark"></span>
						Xbox Series X/S
					</label>
				</div>
			</div>
			<div className="price-container">
				<h3>Цены</h3>
                <div className="price-filter">
                    <input type="number" placeholder="от"/>
					<p>-</p>
                    <input type="number" placeholder="до"/>
                </div>
                <button>Применить фильтры</button>
			</div>
		</section>
	)
}

export default FilterMenu;