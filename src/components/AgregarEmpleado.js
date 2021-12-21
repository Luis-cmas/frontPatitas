import React from 'react'
import "./styles/AgregarEmpleado.css"
export default function AgregarEmpleado() {
    return (
        <div className='AgregarEmpleado'>
            
            <ul className='formEmpleado'>
                <li className='formEmpleado__item'><p>Nombre</p><input type="text"></input></li>
                <li className='formEmpleado__item'><p>Primer Apellido</p><input type="text"></input></li>
                <li className='formEmpleado__item'><p>Segundo Apellido</p><input type="text"></input></li>
                <li className='formEmpleado__item'><p>Teléfono</p><input type="tel"></input></li>
                <li className='formEmpleado__item'><p>Especialidad</p><input type="text"></input></li>
                <li className='formEmpleado__item'><p>Cargo</p><input type="text"></input></li>
                <li className='formEmpleado__item'><p>Correo</p><input type="email"></input></li>
                <li className='formEmpleado__item'><p>Contraseña</p><input type="password"></input></li>
                <li className='formEmpleado__item'><p>Horario de entrada</p><input type="time"></input></li>
                <li className='formEmpleado__item'><p>Horario de salida</p><input type="time"></input></li>
                <button type='submit' className='agregar'>Agregar empleado</button>
            </ul>
            
        </div>
    )
}
