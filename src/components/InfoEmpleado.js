import React from 'react'
import "./styles/InfoEmpleado.css"

export default function InfoEmpleado() {
    return (
        <div className='informacion'>
            
            <ul className='informacion_lista'>
                <li className='informacion_lista-item'>nombre: </li>
                <li className='informacion_lista-item'>Sucursal: </li>
                <li className='informacion_lista-item'>Cargo:</li>
                <li className='informacion_lista-item'>Especialidad:</li>
                <li className='informacion_lista-item'>Correo:</li>
                <li className='informacion_lista-item'>Hora de entrada:</li>
                <li className='informacion_lista-item'>Hora de salida:</li>
                
            </ul>
            
        </div>
    )
}
