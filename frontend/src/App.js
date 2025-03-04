import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import FilterMenu from './components/FilterMenu/FilterMenu.jsx';
import GameCard from './components/GameCard/GameCard.jsx';
import Header from './components/Header/Header.jsx';
import GameInfo from './components/GameInfo/GameInfo.jsx';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Profile from './components/Profile/Profile';


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
        <Routes>
          {/* Главная страница с фильтрами и карточками */}
          <Route path="/" element={
            <>
              <FilterMenu onFilterChange={handleFilterChange} />
              <GameCard filters={filters} />
            </>
          } />
          
          {/* Страница с информацией об игре */}
          <Route path="/games/:id" element={<GameInfo />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<RegisterForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
