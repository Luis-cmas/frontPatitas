import{useEffect, useState} from 'react'
import React from 'react'
import {Link} from "react-router-dom";
import "./styles/Header.css" 
import { connect } from 'react-redux'
//ver  Redux
function Header({usuario}) {
    /* const useref*/
    useEffect(()=>{

    })
    return (
        <div className='cabecera'>
            <header class="header">
            <div>
                <Link to={"/"}><img tabindex="0" class="header__img" src="./img/Loguito.png" alt="Logo"/></Link>
            </div>
        
        <div class="divContainer">
            <input class="inputBuscar" type="text" placeholder="Buscar"/>
            <Link to={"/Busqueda"} class="search-icon" style={{backgroundImage: "url(/img/lupa.png)"}}></Link>
        </div>
        <div class="divTitulos">
            <Link to="/Crear_Cita">Agendar cita</Link>
            <Link to="/Tienda">tienda</Link>
            <Link to={usuario?"/Sesion":"/Inicio_Sesion"}>{usuario?usuario: "Iniciar Sesion"}</Link>
        </div>
    </header>
        </div>
        
    )
}

//trae las variables globales
const mapStateToProps = state => {
    return {
        usuario: state.usuario,
    }
}

export default connect(mapStateToProps)(Header)


// import Axios from 'axios'
// function Header() {
//     /*se guarda una variable usehook ,es una variable que guarda el estado en el que se encuenra y
//     una vezque cambia se actualiza en el virtualdom(vease el index.js),usamos axios(npm install axios)*/
//     const [id, setId] = useState(9) 

//     const [data, setData] = useState([])
//     useEffect(() => {/**traemos la info de una url, ver promesas xd */
//         (async() => {//funcion asincrona,usehooks
//             await Axios.get(`https://backend-patitas.herokuapp.com/patitas3/${id}`)//espera a que traiga todos los datos de la url
//             .then((response) => {//una vez los tiene guarda los datos en la "variable" data
//                 setData(response.data);
//             })
//         })()
//     console.log(data)
// },[])
//     return (

//     <div className='App'>
//         <p>
//             {data.map((a) => a.Nombre_Empleado)}
            
//         </p>
//         {console.log(data)}
//     </div>
//     // <navvar className="App">
//     // soy un header
//     // </navvar>
// );
// }

// export default Header;