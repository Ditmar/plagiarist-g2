import { Button, CardContent, CardMedia } from '@material-ui/core';
import { CardActions } from '@mui/material';
import Card  from '@mui/material/Card';
import { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { Types } from '../../../types/typesFavorites';

const ItemComponent = ({id, title, uri}) => {
    const {dispatch} = useContext(FavoritesContext);
    //const {listFavorites, setListFavorites} = favoritesObject;
    //console.log('my favorites bookmarks',listFavorites)
    const clickFavorites = () => {
        //setListFavorites([...listFavorites, {id, title, uri}]);
        dispatch({type: Types.addFavorites, payload: {id, title, uri}});
    }
    return (
        <div>
            <Card key={id} variant="outlined">
                <CardMedia
                component="img"
                height="140"
                image={uri}
                alt={title}
                />
                <CardContent>
                    {title}
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={clickFavorites}>❤️</Button>
                </CardActions>
            </Card>
        </div>
    );
}
export default ItemComponent