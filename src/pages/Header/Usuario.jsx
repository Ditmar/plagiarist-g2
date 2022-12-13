import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Usuario = ({user}) => {

    return(
        <Fragment>
            <div className="media">
                <div className="nombredeUser hijo2">
                    <h5 className=" usuario"> {user.nombre} </h5>
                </div>
                <div className='hijo2'>
                <Avatar urlImagen={user.urlImagen} />
                </div>
                
            </div>
        </Fragment>
    );
}

export default Usuario; 