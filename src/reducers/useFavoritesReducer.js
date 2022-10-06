import { Types } from "../types/typesFavorites"

const useFavoritesReducer = (state, action) => {
    const {listFavorites} = state;
    switch(action.type) {
        case Types.addFavorites: {
            return {...state, listFavorites: [...listFavorites, action.payload]};
        }
        case Types.removeFavorites: {
            //tarea hacer la funcion remove pueden usar
            //filter para generar un nuevo array
        }
        case Types.shareFavorites: {

        }
        default: 
            throw new Error();
    }
}
export default useFavoritesReducer;