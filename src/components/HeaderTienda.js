import React from 'react'
import {Link} from "react-router-dom";

export default function HeaderTienda() {
    return (
        <header class="header">
        <Link to={"/"}><img tabindex="0" class="header__img" src="./img/Loguito.png" alt="Logo"/></Link>
        <div class="divContainer">
            <input class="inputBuscar" type="text" placeholder="Buscar"/>
            <Link to={"/Busqueda"} class="search-icon" style={{backgroundImage: "url(/img/lupa.png)"}}></Link>
        </div>
        <div class="divTitulos">
            <Link to="/Crear_Cita">Agendar cita</Link>
            <Link to="/Tienda">tienda</Link>
            <Link to="/Inicio_Sesion">Perfil</Link>
        </div>
    </header>
    )
}
