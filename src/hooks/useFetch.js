import { useState } from "react"
import { searchGiffs } from "../services"

const useFetch = (criterial) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
        const response =  await searchGiffs(criterial);
        setData(response);
        setIsLoading(false);
    };
    getData();
    return {data, isLoading};
}
export default useFetch;