import{useEffect, useState} from 'react'
import Axios from 'axios'
function Header() {
    /*se guarda una variable usehook ,es una variable que guarda el estado en el que se encuenra y
    una vezque cambia se actualiza en el virtualdom(vease el index.js),usamos axios(npm install axios)*/
   const [id, setId] = useState(1) 
   
    const [data, setData] = useState([])
    useEffect(() => {/**traemos la info de una url, ver promesas xd */
        (async() => {//funcion asincrona,usehooks
            await Axios.get(`https://backend-patitas.herokuapp.com/patitas2/${id}`)//espera a que traiga todos los datos de la url
            .then((response) => {//una vez los tiene guarda los datos en la "variable" data
                setData(response.data);
            })
        })()
    console.log(data)
},[])
    return (

    <div className='App'>
        <p>
            {data.map((a) => a.Nombre_Empleado)}
        </p>
        {console.log(data)}
    </div>
    // <navvar className="App">
    // soy un header
    // </navvar>
);
}

export default Header;