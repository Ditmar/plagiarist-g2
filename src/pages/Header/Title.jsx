import React, { Fragment } from 'react'
import useStyles from '../../components/Header/multi.style'

 const Title = (props) => {
    const classes = useStyles();
     return(
        <Fragment>
            <h4 className={classes.titulo}>Overview {props.Pagina} </h4>
        </Fragment>

     )
 }
export default Title; 