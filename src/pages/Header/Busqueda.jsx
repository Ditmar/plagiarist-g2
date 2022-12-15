import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useStyles from '../../components/Header/multi.style'
const Busqueda = () => {
    const classes = useStyles();
    return(
        <div className="Busqueda">
        <div className={classes.containerInput}>
            <input 
                className={classes.inputBuscar}
            />
            <button className="btn btn-success">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    </div>
    );
}

export default Busqueda;