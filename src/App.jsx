import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SearchGiffs from './pages/SearchGiffs';
import Login from './pages/login';
import Header from './components/Header';
import MenuComponent from './components/MenuComponent';
import FavoritesContextProvider from './context/FavoritesContextProvider';
import FavoritesComponent from './components/FavoritesComponent';
function App() {
  const items = [
    {
      to: '/',
      name: 'Home'  
    },
    {
      to: '/searchgiffs',
      name: 'Search Memes'
    },
    {
      to: '/login',
      name: 'Login'
    }
  ];
  return (
    
      <Theme>
        <FavoritesContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<>
                <Header/>
                <MenuComponent items={items}/>
                <FavoritesComponent />
              </>}/>
              <Route path="/searchgiffs" element={<>
                <Header />
                <MenuComponent items={items}/>
                <SearchGiffs />
              </> } />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </FavoritesContextProvider>
      </Theme>
  );
}

export default App;
