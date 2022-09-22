import Header from "./components/Header";
import { LandingPage } from "./components/LandingPage/LandingPage";
import Search from "./components/Search/Search";
import Theme from "./theme/theme";
function App() {
  return (
    <Theme>
      <Header />
      <LandingPage>
        <Search />
      </LandingPage>
    </Theme>
  );
}

export default App;
