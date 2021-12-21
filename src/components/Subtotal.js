import React from 'react'
import './styles/Subtotal.css'
import { connect } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducers';

function Subtotal({carrito}) {
const pago=()=>{
    alert("su compra ha sido realizada")
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

export default connect(mapStateToProps)(Subtotal)