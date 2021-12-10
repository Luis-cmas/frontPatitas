

import React from 'react'
import './styles/carrusel.css';
function Carrusel({nombre,id}) {
    /**se pueden poner declarar variables y para utilizarlas se pone entre llaves {variable} */
    const num=1;
    return (
        <div className='carrusel'>
            soy un carruseeeeeel
            {num}
            <div>
                su nombre es {nombre} y su id es {id}
            </div>
        </div>
        
    )
}

export default Carrusel
