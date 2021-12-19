import React from 'react'

export default function CrearCita() {
    return (
        <div >
            <form>
                <div className='formulario'>
                    <div className='formulario-item'>
                        <select >
                            <option defaultValue="default" defaultChecked="default" >seleccione una sucursal</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option defaultValue="default" defaultChecked="default" >seleccione su vterinario</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option defaultValue="default" defaultChecked="default" >seleccione un horario</option>
                        </select>

                    </div>

                </div>


            </form >
        </div >
    )
}
