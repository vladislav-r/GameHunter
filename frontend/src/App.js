import { useState } from 'react';
import FilterMenu from './components/FilterMenu/FilterMenu.jsx';
import GameCard from './components/GameCard/GameCard.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  const [filters, setFilters] = useState({
    categories: [],
    platforms: [],
    shops: [],
    priceFrom: '',
    priceTo: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className='games'>
      <Header />
      <div className='container'>
        <FilterMenu onFilterChange={handleFilterChange} />
        <GameCard filters={filters} />
      </div>
    </div>
  );
}

export default App;
