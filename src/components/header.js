import{useEffect} from 'react'
import React from 'react'
import {Link} from "react-router-dom";
import "./styles/Header.css" 
import { connect } from 'react-redux'
//ver  Redux
function Header({usuario,empleado,carrito}) {
    /* const useref*/
    useEffect(()=>{

    })
    return (
            <header className="header">
                
                    <div>
                        <Link to={"/"}><img tabindex="0" className="header__img" src="./img/Loguito.png" alt="Logo"/></Link>
                    </div>
                
                    <div className="divContainer">
                        <input className="inputBuscar" type="text" placeholder="Buscar"/>
                        <i className="uil uil-search search-icon"/>
                    </div>
                
                
                <div className="divTitulos">
                    <Link to="/Crear_Cita">Agendar cita</Link>
                    <Link to="/Tienda">Tienda</Link>
                    {empleado ? 
                        <Link to='/Sesion_empleado'>{empleado}</Link>
                        :
                        <Link to={usuario?"/Sesion_usuario":"/Inicio_Sesion"}>{usuario?usuario: "Iniciar Sesion"}</Link>
                    }
                    <Link to={'/carrito'} className='header__canasta'>
                        <i className="uil uil-shopping-cart-alt canasta__icon"></i>
                        <span>{carrito?.length}</span>
                    </Link>
                </div>
            </header>
    )
}

//trae las variables globales
const mapStateToProps = state => {
    return {
        usuario: state.usuario,
        empleado: state.empleado,
        carrito: state.carrito
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