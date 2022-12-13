import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Busqueda = () => {

    return(
        <div className="Busqueda">
        <div className="containerInput">
            <input 
                className="form-control inputBuscar"
            />
            <button className="btn btn-success">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    </div>
    );
}

export default Busqueda;