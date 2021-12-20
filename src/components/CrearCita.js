import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "./styles/CrearCita.css"

export default function CrearCita() {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])

    const [option, setOption] = useState("");
    const [option2, setOption2] = useState("");
    const [contador, setContador] = useState(0);
    const [entrada, setEntrada] = useState(0);
    const [salida, setSalida] = useState(0);



    const handleChangeS = (event) => {
        setOption(event.target.value);
    }
    const handleChangeE = (event) => {
        setOption2(event.target.value);
    }


    useEffect(() => {/**traemos la info de una url, ver promesas xd */
        //funcion asincrona,usehooks
        (async () => {
            await Axios.get(`https://backend-patitas.herokuapp.com/sucursales`)//espera a que traiga todos los datos de la url
                .then((response) => {//una vez los tiene guarda los datos en la "variable" data
                    setData(response.data);
                })
            await Axios.get(`http://localhost:3001/search?nombre=${option}`)//espera a que traiga todos los datos de la url
                .then((response) => {//una vez los tiene guarda los datos en la "variable" data
                    setData2(response.data);
                })
        })()
    }, [option])

    useEffect(() => {
        Axios.get(`http://localhost:3001/horario?empleado=${option2}`)//espera a que traiga todos los datos de la url
            .then((response) => {//una vez los tiene guarda los datos en la "variable" data
                setData3(response.data);
            })
    }, [option2])

    const Horario = () => {
        const entrada = parseInt(data3[0].Horario_entrada_Empleado);
        setEntrada(entrada);
        const salida = parseInt(data3[0].Horario_salida_Empleado);
        setSalida(salida);
        const contador = salida - entrada;
        setContador(contador);

        console.log(entrada);

    }


    return (
        <div className='formulario'>
            <form className='formular'>

                <p>Genere su cita</p>
                <div className='formulario-item'>
                    <select onChange={handleChangeS} >
                        <option defaultValue="default" defaultChecked="default" id="sucursales" >seleccione una sucursal</option>
                        {data.map((a) => <option> {a.Nombre_Sucursal}</option>)}
                    </select>
                </div>
                <div className='formulario-item'>
                    <select onChange={handleChangeE}>
                        <option defaultValue="default" defaultChecked="default"  >seleccione su veterinario</option>
                        {data2.map((a) => <option> {a.Nombre_Empleado}</option>)}
                    </select>
                </div>
                <div className='formulario-item'>
                    <select>
                        <option defaultValue="default" defaultChecked="default" >seleccione un horario</option>
                        {/* {data3.map((a) =><option> {a.Nombre_Empleado}</option>)} */}
                    </select>

                </div>
                <button type='submit'> Generar cita</button>
            </form >
        </div >
    )
}
