import React from 'react'
import './Subtotal.css'
import { connect } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Subtotal({carrito}) {

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
            <button>Proceed to Checkout</button>

        </div>
    )
}

//trae las variables globales
const mapStateToProps = state => {
    return {
        carrito: state.usuario,
    }
}

export default connect(mapStateToProps)(Subtotal)