import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import "./styles/Inventario.css"

export default function Inventario() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            //cambiar por https://backend-patitas.herokuapp.com/producto una vez lo suban en github
            Axios.get(`https://backend-patitas.herokuapp.com/producto`)
                .then((response) => {
                    setData(response.data);
                })
        })()
    }, [])

    return (
        <div className='minv'>
            <p>inventario</p>
            {data.map((item) => {
                return (<div className='inventario'>
                    <p>{item.Nombre_Producto}</p>
                    <p>{item.precio}</p>
                    <p>{item.Descripcion}</p>
                </div>

                )
            })}
            
        </div>
    )
}
