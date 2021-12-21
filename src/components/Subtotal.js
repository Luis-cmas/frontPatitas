import React from 'react'
import './styles/Subtotal.css'
import { connect } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducers';
import {emptyCarrito} from '../actions'

function Subtotal({carrito, emptyCarrito}) {
    const pago = () => {
        alert("SU PAGO HA SIDO REALIZADO");
        emptyCarrito();
    }
    return (
        <div className='subtotal'>
            {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({carrito.length} items) : <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/>  This order contains this products
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(carrito)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={pago}>Proceder al pago</button>

        </div>
    )
}

//trae las variables globales
const mapStateToProps = state => {
    return {
        carrito: state.carrito,
    }
}

const mapDispatchToProps = {
    emptyCarrito
}

export default connect(mapStateToProps,mapDispatchToProps)(Subtotal)