const getData = async (state) => {
    const link = process.env.REACT_APP_API_ENPOINT;
    const response = await fetch(link); 
    state(await response.json())
}
export default getData