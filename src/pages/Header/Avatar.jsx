import React, { Fragment } from 'react'
import useStyles from '../../components/Header/multi.style'
const Avatar = ({urlImagen}) => {
    const classes = useStyles();
    return(
        <Fragment>
            <img src={urlImagen} alt="" className={classes.avatar}/>
        </Fragment>
    );
}

export default Avatar;