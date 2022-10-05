import { useState } from 'react';
import { FavoritesContext } from './FavoritesContext';

const FavoritesContextProvider = ({children}) => {
    const [listFavorites, setListFavorites] = useState([]);
    const favoritesObject = {listFavorites, setListFavorites}
    return <FavoritesContext.Provider value={{favoritesObject}}>
        {children}
    </FavoritesContext.Provider>
}
export default FavoritesContextProvider;