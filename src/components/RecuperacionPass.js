import React from 'react'
import "./styles/RecuperacionPass.css"
import { useForm } from "react-hook-form"
import Axios from "axios"

export default function RecuperacionPass() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
       
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

                    <input className="button" type="submit" value="Enviar correo" />
                    
                </form>
                
            </div>

        </div>

    )
}
