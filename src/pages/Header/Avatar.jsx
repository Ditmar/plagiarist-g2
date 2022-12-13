import React, { Fragment } from 'react'

const Avatar = ({urlImagen}) => {

    return(
        <Fragment>
            <img src={urlImagen} alt="" className=" avatar"/>
        </Fragment>
    );
}

export default Avatar;