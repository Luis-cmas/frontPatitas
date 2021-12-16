import React, { useState } from 'react'
import "./styles/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUsuario } from '../actions'
import Axios from "axios"
import { useForm } from "react-hook-form"
import { setId } from '../actions'
//props,en este caso son setUsuario y usuario

function Login({ setUsuario, usuario,setId }) {

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
            Axios.get(`http://localhost:3001/usuarioInfo/${data.email}/${data.password}`)
                .then((response) => {
                    console.log(response)
                    setUsuario(response.data[0].Nombre_Usuario);
                    setId(response.data[0].Id_Usuario);
                    alert(response.data[0].Nombre_Usuario)
                    history('/');
                })

        }).catch((err) => {
            setFail(true)
        })
    };



    return (
        <div className='login'>
            <div className='login__content'>
                <h2 tabindex="0">Inicia sesión</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='login__container--form'>
                    <div className='contact__input-group'>
                        <label htmlFor="email">Correo</label>
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
                        <label htmlFor="password">contraseña</label>
                        <input className='input'
                            type="password"
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
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <p className="login__container--register">No tienes ninguna cuenta <a href="./Crear_Cuenta"> Regístrate </a></p>
            </div>

        </div>


    )
}

//creamos funciones para traer las variabes globales, siempre se usa cuando utilizas redux
//trae la funcion para cambiar el valor de la variable
const mapDispatchToProps = {
    setUsuario,
    setId
}
//trae las variables globales
const mapStateToProps = state => {
    return {
        usuario: state.usuario,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)