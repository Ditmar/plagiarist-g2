const apiData = async (state) => {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    state(await response.json())
}
export default apiData;
