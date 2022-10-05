import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import GridComponent from "../GridComponent";

const FavoritesComponent = () => {
    const {favoritesObject} = useContext(FavoritesContext);
    const {listFavorites} = favoritesObject;
    return <div>
        <GridComponent data={listFavorites} isLoading={false}/>
    </div>
}
export default FavoritesComponent;