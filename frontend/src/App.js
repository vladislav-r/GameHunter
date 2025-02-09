import FilterMenu from './components/FilterMenu/FilterMenu.jsx';
import GameCard from './components/GameCard/GameCard.jsx';
import Header from './components/Header/Header.jsx';

function App() {

	return (
		<div className='games'>
			<Header/>
			<div className='container'>
				<FilterMenu/>
				<GameCard/>
			</div>
		</div>
	)
}

export default App;
