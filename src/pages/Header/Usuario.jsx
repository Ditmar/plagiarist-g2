import React, { Fragment } from 'react'
import Avatar from './Avatar'
import useStyles from '../../components/Header/multi.style'
const Usuario = ({user}) => {
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.media}>
                <div className={classes.hijo2}>
                    <h5 className={classes.usuario}> {user.nombre} </h5>
                </div>
                <div className={classes.hijo2}>
                <Avatar urlImagen={user.urlImagen} />
                </div>
                
            </div>
        </Fragment>
    );
}

export default Usuario; 