import { useState } from "react";

const {REACT_APP_URL_GIPHY, REACT_APP_URL_KEY} = process.env;
const FetchData = (search) => {
    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    fetch(`${REACT_APP_URL_GIPHY}search?api_key=${REACT_APP_URL_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`).then(
        (response) => response.json()
    ).then(({data}) => {
        setIsLoading(false);
        setResult(data);
    });
    return {result, isLoading};
}
export default FetchData;