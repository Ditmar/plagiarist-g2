import { useState } from "react"
import { searchGiffs } from "../services"

const useFetch = (loading =  true) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(loading);
    const getData = async(criterial) => {
        const response =  await searchGiffs(criterial);
        console.log(response);
        setData(response);
        setIsLoading(false);
    };
    return {data, isLoading, getData, setIsLoading};
}
export default useFetch;