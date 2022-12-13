import React from 'react'
import Title from "../../pages/Header/Title";
import Usuario from "../../pages/Header/Usuario";
import "../../pages/Header/Review.css";
import Busqueda from "../../pages/Header/Busqueda";
import Bell from "../../pages/Header/Bell";


const Review = () => {

    const user= {
        nombre:'Ruth zulma Carvajal Castro​',
        urlImagen: 'https://www.pngmart.com/files/19/Pink-Rose-Flower-PNG-Image.png',
    };


    return (
        <div className="padre">
            <div className="hijo"><Title Pagina="" /></div>
            <div className="hijo"><Busqueda /></div>
            <div className="hijo"><Bell /> </div>
            <div className="hijo"> <Usuario user={user}/></div>
        </div>
        
     
        
    )
}
export default Review;