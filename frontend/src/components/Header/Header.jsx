import './Header.css';

const Header = () => {
	return (
		<header className='container'>
			<nav>
				<ul>
                    <li><a href="/">Главная</a></li>
                    {/*<li><a href="/streams">Стримы</a></li>*/}
                    {/*<li><a href="/store">Магазин</a></li>*/}
					{/*<li><a href="/news">Новости</a></li>*/}
                </ul>
			</nav>
			<div className="user-container">

			</div>
		</header>
	)
}

export default Header