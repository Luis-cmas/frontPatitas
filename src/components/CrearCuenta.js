import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/CrearCuenta.css"
export default function CrearCuenta() {
    return (
        <div>
            <section class="login">
                <section class="login__container">
                    <h2>Regístrate</h2>
                    <form class="login__container--form" >
                        <input class="input" type="email" placeholder="Correo" autoComplete='email'  />
                        <input class="input" type="password" placeholder="Contraseña" />
                        <input class="input" type="password" placeholder="Confirma Contraseña" />
                        <div className='verificacionRobot'>
                        <input type='checkbox' /> No soy un robot
                        </div>
                        
                        <button class="button"> Registrarse</button>
                    </form>
                    <p class="login__container--inicio"> ¿Ya estas registrado? <Link to="../Inicio_Sesion"> Iniciar Sesión </Link></p>
                </section>
            </section>
            <footer class="footer">
                <Link to="/"> Téminos de uso</Link>
                <Link to="/">Declaración de privacidad</Link>
                <Link to="/">Centro de ayuda</Link>
            </footer>

        </div>

    )
}
