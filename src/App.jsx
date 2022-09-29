import { useState } from "react";
import GridComponent from "./components/GridComponent";
import Header from "./components/Header";
import SearchComponent from "./components/SearchComponent";
import Theme from "./theme/theme";
function App() {
  const [criterial, setCriterial] = useState('');
  const handlerOnSubmit = ({search}) => {
    //const {data, isLoading} = useFetch(search);
    setCriterial(search);
  }
  return (
    <Theme>
      <Header />
      <SearchComponent handlerOnSubmit={handlerOnSubmit}/>
      <GridComponent criterial={criterial}/>
    </Theme>
  );
}

export default App;
