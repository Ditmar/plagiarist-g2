export const searchGiffs = async(criterial) => {
    const uriGiffs = process.env.REACT_APP_URL_GIPHY;
    const apiKey = process.env.REACT_APP_URL_KEY;
    const uri = `${uriGiffs}/search?api_key=${apiKey}&q=${criterial}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(uri);
    const { data } = await response.json();
    const filterResult = data.map( item => {
        return {
            id: item.id,
            title: item.title,
            uri: item.images.downsized.url
        }
    })
    return filterResult;
}