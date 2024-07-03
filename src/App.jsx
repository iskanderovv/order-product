import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './routes/products/Products';
import Favorites from './routes/favorites/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
