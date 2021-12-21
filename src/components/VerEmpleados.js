import React , {useEffect,useState} from 'react'
import Axios from 'axios'

export default function VerEmpleados() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            //cambiar por https://backend-patitas.herokuapp.com/producto una vez lo suban en github
            Axios.get(`https://backend-patitas.herokuapp.com/SolucitudEmpleados`)
                .then((response) => {
                    setData(response.data);
                })
        })()
    }, [])
    return (
        <div>
            <p>ver empleados</p>
            {data.map((item)=>{
                return(
                    <p>{item.Nombre_Empleado}</p>
                    )
                })}
            
        </div>
    )
}
