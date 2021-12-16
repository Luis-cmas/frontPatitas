import React from 'react'
import { connect } from 'react-redux'
function SesionUsuario({usuario}) {
    return (
        <div>
            <h1>Buenas noshes {usuario}</h1>
        </div>
    )
}


//trae las variables globales
const mapStateToProps = state => {
    return {
        usuario: state.usuario,
    }
}

export default connect(mapStateToProps)(SesionUsuario)