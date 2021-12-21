import React from 'react'
import { setCarrito } from '../actions'
import { connect } from 'react-redux'

function Producto({key,setCarrito,imagen,nombre,descripcion}) {
    const agregarCarrito = ()=>{
        setCarrito({
            id : key,
            imagen : imagen,
            nombre : nombre,
            descripcion : descripcion
        })
    }
    return (

        <div key={key} className='producto__card'>
            <img src={`http://drive.google.com/uc?export=view&id=${imagen}`} alt="Mascotas" />
            <h3>{nombre}</h3>
            <span>{descripcion}</span>
            <button onClick={agregarCarrito} ><i class="uil uil-shopping-cart carrito"> </i>Agregar al carrito</button>
        </div>

    )
}
const mapDispatchToProps = {
    setCarrito,
}
//trae las variables globales
const mapStateToProps = state => {
    return {
        carrito: state.usuario,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Producto)