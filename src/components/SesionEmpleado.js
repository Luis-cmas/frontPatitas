import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import './styles/Empleado.css'
import { Link } from 'react-router-dom';

function SesionEmpleado({ id, empleado }) {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(true);


    useEffect(() => {
        (async () => {
            Axios.get(`https://backend-patitas.herokuapp.com/empleado/${id}`)
                .then((response) => {
                    setData(response.data);
                })
        })()
    }, [id])

    return (
        <div className='sesion'>
            {console.log(data)}
            <div className='sesion__empleado'>
                <img src="/img/perro.png" alt=" Imagen de Empleado" className='sesion__imagen' />
                <ul className='sesion__lista'>
                    <li className='sesion__lista-item'><Link to="/Sesion_empleado"> Informacion de {empleado}</Link></li>
                    <li className='sesion__lista-item'>Inventario</li>
                    <li className='sesion__lista-item'>Agregar Productos</li>
                    <li className='sesion__lista-item'>Eliminar Productos</li>
                    <li className='sesion__lista-item'>Empleados</li>
                    <li className='sesion__lista-item'>Agregar Empleado</li>
                    <li className='sesion__lista-item'>Eliminar Empleado</li>

                </ul>
            </div>
            {   
                
                user && (
                    <div className='sesion__informacion'>
                        {data.map((item) => {
                            return (
                                <div key={item.Id_Mascota} className=''>
                                    <img src="/img/perro.png" alt="Mascotas" />
                                    <h3>{item.Nombre_Empleado}</h3>
                                    <span>{item.Especialidad}</span>
                                    <span>{item.Cargo_Empleado}</span>
                                    <span>{item.Horario_entrada_Empleado}</span>
                                    <span>{item.Horario_salida_Empleado}</span>
                                    <button>Expediente</button>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        empleado: state.empleado,
        id: state.id
    }
}

export default connect(mapStateToProps)(SesionEmpleado)