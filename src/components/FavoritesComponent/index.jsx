import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import GridComponent from "../GridComponent";

const FavoritesComponent = () => {
    const {state} = useContext(FavoritesContext);
    const {listFavorites} = state;
    return <div>
        <GridComponent data={listFavorites} isLoading={false}/>
    </div>
}
export default FavoritesComponent;