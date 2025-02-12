import './FilterMenu.css';
import {useEffect, useState} from "react";
import {getShops} from "../../api";
const FilterMenu = () => {

	const [shops, setShops] = useState([]);

	useEffect(() => {
		const loadShops = async () => {
			try {
				const shopsData = await getShops();
				setShops(shopsData);
			} catch (error) {
				console.error('Failed to load games:', error);
			}
		};

		loadShops();
	}, []);
	return (
		<section className='menu-container'>
			<div className="categories-container">
				<h3>Категории</h3>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Инди
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Приключения
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						ММО
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Казуальные игры
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Стратегии
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Симуляторы
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Спортивные игры
					</label>
				</div>
			</div>
			<div className="platform-container">
				<h3>Платформы</h3>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Steam
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						GOG
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Epic Games
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						PlayStation 4
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						PlayStation 5
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Xbox One
					</label>
				</div>
				<div className="category-item">
					<label className="custom-checkbox">
						<input type="checkbox"/>
						<span className="checkmark"></span>
						Xbox Series X/S
					</label>
				</div>
			</div>
			<div className="shops-container">
				<h3>Магазины</h3>
				{shops.map(shop => (
					<div className="category-item">
						<label className="custom-checkbox">
							<input type="checkbox"/>
							<span className="checkmark"></span>
							{shop.title}  <span style={{fontSize: '10px'}}>{shop.games}</span>
						</label>
					</div>
				))}
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