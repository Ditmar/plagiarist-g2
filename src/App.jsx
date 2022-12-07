import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './components/DashboardComponent/Dashboard';
import UploadComponent from './components/UploadComponent';
import LoaderComponent from './components/LoaderComponent';
import LoaderSpinnerContextProvider from './context/LoaderSpinnerContextProvider';
import Detail from './pages/detail';
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
        <LoaderSpinnerContextProvider>
          <BrowserRouter>
            <LoaderComponent />
            <Routes>
              <Route path="/" element={<>
                <Dashboard> 
                  <p>content </p> 
                </Dashboard>
              </>}/>
              <Route path="/upload" element={<>
                <Dashboard> 
                  <UploadComponent />
                </Dashboard>
              </> } />
              <Route path="/detail/:slug" element={<>
                <Dashboard> 
                  <Detail />
                </Dashboard>
              </> } />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </LoaderSpinnerContextProvider>
      </Theme>
  );
}

export default App;
