import React ,{useState,useEffect}  from 'react'
import Axios from 'axios'
import "./styles/CrearCita.css"

export default function CrearCita() {
    let sucursal=""
    const [data, setData] = useState([])
    const [data2,setData2] = useState([])
    const [data3,setData3] = useState([])
    // veterinarios(){
    //     sucursal = document.getElementById("sucursales").value;

    // }

    useEffect(() => {/**traemos la info de una url, ver promesas xd */
        (async() => {//funcion asincrona,usehooks
            await Axios.get(`https://backend-patitas.herokuapp.com/sucursales`)//espera a que traiga todos los datos de la url
            .then((response) => {//una vez los tiene guarda los datos en la "variable" data
                setData(response.data);
            })
            await Axios.get(`https://backend-patitas.herokuapp.com/sucursal/${sucursal}`)//espera a que traiga todos los datos de la url
            .then((response) => {//una vez los tiene guarda los datos en la "variable" data
                setData2(response.data);
            })
            await Axios.get(`https://backend-patitas.herokuapp.com/sucursales`)//espera a que traiga todos los datos de la url
            .then((response) => {//una vez los tiene guarda los datos en la "variable" data
                setData(response.data);
            })
        })()
    console.log(data)
},[])
    return (
        <div className='formulario'>
            <form className='formular'>
                
                    <p>Genere su cita</p>
                    <div className='formulario-item'>
                        <select >
                            <option defaultValue="default" defaultChecked="default" id="sucursales" >seleccione una sucursal</option>
                            {data.map((a) =><option> {a.Nombre_Sucursal}</option>)}
                        </select>
                    </div>
                    <div className='formulario-item'>
                        <select>
                            <option defaultValue="default" defaultChecked="default"  >seleccione su veterinario</option>
                        </select>
                    </div>
                    <div className='formulario-item'>
                        <select>
                            <option defaultValue="default" defaultChecked="default" >seleccione un horario</option>
                        </select>

                    </div>
                    <button type='submit'> Generar cita</button>
            </form >
        </div >
    )
}
