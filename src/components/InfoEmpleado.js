import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { connect } from 'react-redux'
import "./styles/InfoEmpleado.css"

function InfoEmpleado({ id, empleado }) {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [user, setUser] = useState(true);


    useEffect(() => {
        (async () => {
            Axios.get(`https://backend-patitas.herokuapp.com/empleado/${id}`)
                .then((response) => {
                    setData(response.data);
                }).then((res)=>{
                    Axios.get(`https://backend-patitas.herokuapp.com/sucursal/${data.map((e) => e.Id_sucursal)}`)
                    .then((response) => {
                        setData2(response.data);
                    })                 
                })             
        })()
    }, [id])

    return (
        <div className='informacion'>


            {data.map((e) => {
                return (
                    <ul className='informacion_lista'>
                        <li className='informacion_lista-item'>nombre: {e.Nombre_Empleado} </li>
                        <li className='informacion_lista-item'>Sucursal:  {data2.map((suc)=>suc.Nombre_Sucursal)}</li>
                        <li className='informacion_lista-item'>Cargo: {e.Cargo_Empleado}</li>
                        <li className='informacion_lista-item'>Especialidad: {e.Especialidad}</li>
                        <li className='informacion_lista-item'>Correo: {e.Correo_Empleado}</li>
                        <li className='informacion_lista-item'>Hora de entrada: {e.Horario_entrada_Empleado}</li>
                        <li className='informacion_lista-item'>Hora de salida: {e.Horario_salida_Empleado}</li>
                    </ul>

                )
            })}




        </div>
    )
}

//trae las variables globales
const mapStateToProps = state => {
    return {
        empleado: state.empleado,
        id: state.id
    }
}

export default connect(mapStateToProps)(InfoEmpleado)