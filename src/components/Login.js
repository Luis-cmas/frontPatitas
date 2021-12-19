import React from 'react'
import "./styles/Login.css"
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUsuario, setEmpleado, setId } from '../actions'
import Axios from "axios"
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
//props,en este caso son setUsuario y usuario

function Login({ setUsuario, usuario, setId, setEmpleado }) {

    const history = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        Axios.post("http://localhost:3001/usuario", {
            email: data.email,
            password: data.password,
        }).then((response) => {
            Axios.get(`http://localhost:3001/usuarioId/${data.email}/${data.password}`)
                .then((response) => {
                    setUsuario(response.data[0].Nombre_Usuario);
                    setId(response.data[0].Id_Usuario);
                    alert("Has iniciado sesion como usurio " + response.data[0].Nombre_Usuario)
                    history('/');
                }).catch((err) => {
                    Axios.post(`http://localhost:3001/empleados`, {
                        email: data.email,
                        password: data.password
                    })
                        .then((response) => {
                            Axios.get(`http://localhost:3001/empleado/${data.email}/${data.password}`)
                                .then((response) => {
                                    setEmpleado(response.data[0].Nombre_Empleado);
                                    setId(response.data[0].Id_Empleado);
                                    alert("Has iniciado sesion como empleado " + response.data[0].Nombre_Empleado);
                                    history('/');

                                }).catch(() => {
                                    alert("Correo o contraseña incorrecta");
                                })
                        })
                })

        }).catch((err) => {
            alert("Hola catch");
        })
    };



    return (
        <div className='login'>
            <div className='login__content'>
                <h2 tabindex="0">Inicia sesión</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='login__container--form'>
                    <div className='contact__input-group'>
                        <span htmlFor="email">Correo</span>
                        <input className='input'
                            type='email'
                            placeholder="ingrese su email"
                            {...register("email", {
                                validate: {
                                    email: (value) => value !== ""
                                }
                            })}
                        />
                        {errors.email && errors.email.type === "email" && (<p>Ingrese un email valido</p>)}

                    </div>

                    <div className='contact__input-group'>
                        <span htmlFor="password">Contraseña</span>
                        <input className='input'
                            type="text"
                            placeholder="ingrese su contraseña"
                            {...register("password", {
                                validate: {
                                    password: (value) => value !== "",
                                }

                            })}
                        />
                        {errors.password && errors.password.type === "password" && (
                            <p>ingrese su contraseña</p>
                        )}
                    </div>

                    <input className="button" type="submit" value="Iniciar sesion" />
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" valuse="checkbox" /> Recuerdame
                        </label>
                        <br />
                        <Link to="../Recuperacion_Contrasena">Olvidé mi contraseña</Link>
                    </div>
                </form>
                <p className="login__container--register">¿No tienes ninguna cuenta?<a href="./Crear_Cuenta">  ¡Regístrate! </a></p>
            </div>

        </div>


    )
}

//creamos funciones para traer las variabes globales, siempre se usa cuando utilizas redux
//trae la funcion para cambiar el valor de la variable
const mapDispatchToProps = {
    setUsuario,
    setId,
    setEmpleado
}
//trae las variables globales
const mapStateToProps = state => {
    return {
        usuario: state.usuario,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)