import Theme from "./theme/theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchGiffs from "./pages/SearchGiffs";
import Login from "./pages/login";
import Header from "./components/Header";
function App() {
  
  return (
    <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <Header />
              <SearchGiffs />
            </> } />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>

    </Theme>
  );
}

export default App;
