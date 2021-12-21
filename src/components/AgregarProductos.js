import React from 'react'
import "./styles/AgregarProductos.css"
export default function AgregarProductos() {
    return (
        <div className='AgregarProductos'>
            
            <ul className='formProductos'>
                <li className='formProductos__item'><p>Nombre del producto</p><input type="text"></input></li>
                <li className='formProductos__item'><p>Precio</p><input type="number"></input></li>
                <li className='formProductos__item'><p>Descripción</p><input type="text"></input></li>
                <li className='formProductos__item'><p>Categoría</p><input type="tel"></input></li>
                <li className='formProductos__item'><p>Especie</p><input type="text"></input></li>
                <li className='formProductos__item'><p>Stock</p><input type="number"></input></li>
                <button type='submit' className='agregar'>Agregar producto</button>
            </ul>
            
        </div>
    )
}
