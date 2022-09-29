import { useEffect } from "react";
import GridComponent from "../../components/GridComponent";
import Header from "../../components/Header";
import SearchComponent from "../../components/SearchComponent";
import useFetch from '../../hooks/useFetch';
const SearchGiffs = () => {
  const {data, isLoading, getData} = useFetch(true);
  useEffect(() => {
    getData('futurama');
  }, []);
  const handlerOnSubmit = ({search}) => {
    getData(search);
  }
  return (
    <>
      <SearchComponent handlerOnSubmit={handlerOnSubmit}/>
      <GridComponent data={data} isLoading={isLoading}/>
    </>
  );
}

export default SearchGiffs;
