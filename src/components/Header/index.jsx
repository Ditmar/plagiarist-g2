import React from 'react'
import { Typography } from '@mui/material';
import Title from "../../pages/Header/Title";
import User from "../../pages/Header/User";
import Search from "../../pages/Header/Search";
import Bell from "../../pages/Header/Bell";
import useStyles from './header.styles';

const Review = () => {

    const user= {
        nombre:'Ruth zulma Carvajal Castro​',
        urlImagen: 'https://www.pngmart.com/files/19/Pink-Rose-Flower-PNG-Image.png',
    };
    const classes = useStyles();

    return (
        <Typography>
            <div className={classes.padre}>
                <div className={classes.hijo}><Title Pagina="" /></div>
                <div className={classes.hijo}><Search /></div>
                <div className={classes.hijo}><Bell /> </div>
                <div className={classes.hijo}> <User user={user}/></div>
            </div>
        </Typography>
        
    )
}
export default Review;