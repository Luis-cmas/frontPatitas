import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'


function SesionUsuario({ usuario, id }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            Axios.get(`http://localhost:3001/mascota/${id}`)
                .then((response) => {
                    setData(response.data);
                })
        })()
    }, [id])

    return (
        <div className='sesion'>
            <div className='sesion__usuario'>
                <img src="/img/perro.png" alt=" Imagen de Usuario" />
                <ul>
                    <li>Informacion de Usuario</li>
                    <li>Mascotas</li>
                    <li>Citas</li>
                    <li></li>
                </ul>
            </div>
            <div className='sesion__informacion'>
                {data.map((item) => {
                    return(
                        <div key={item.Id_Mascota} className=''>
                            <img src="/perro.png" alt="Mascotas" />
                            <h3>{item.Nombre_Mascota}</h3>
                            <span>{item.Especie_Mascota}</span>
                            <button>Expediente</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


//trae las variables globales
const mapStateToProps = state => {
    return {
        usuario: state.usuario,
        id: state.id
    }
}

export default connect(mapStateToProps)(SesionUsuario)