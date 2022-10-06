import { useReducer } from 'react';
import useFavoritesReducer from '../reducers/useFavoritesReducer';
import { FavoritesContext } from './FavoritesContext';

const initState = {
    name: 'Ditmar',
    listFavorites: []
}

const FavoritesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(useFavoritesReducer, initState);
    // const [listFavorites, setListFavorites] = useState([]);
    // const favoritesObject = {listFavorites, setListFavorites}
    return <FavoritesContext.Provider value={{state, dispatch}}>
        {children}
    </FavoritesContext.Provider>
}
export default FavoritesContextProvider;