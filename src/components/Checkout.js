import React from 'react'
import './styles/Checkout.css'
import { connect } from 'react-redux';
import CheckProduct from './CheckProduct';
// import Subtotal from './Subtotal.js'

function Checkout({carrito}) {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img 
                className='checkout__add' 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt=""
                />

                {carrito?.length === 0 ?
                    (
                        <div className=''>
                            <h2>Tu canaste esta vacia</h2>
                            <p>You have no items in your basket. To buy one or more 
                                products go to the home an "Add to basket" </p>
                        </div>
                    ):(
                        <div>
                            <h2 className='checkout__title'>Tu carrito de compras 🛍 </h2>
                                {/* List out all of the Checkout Products */}
                                {carrito.map(item => (
                                    <CheckProduct
                                        id={item.id}
                                        title={item.nombre}
                                        image={item.imagen}
                                        price={"1,200"}
                                        description={item.descripcion}
                                    />
                                ))}
                        </div>
                    )
                }
            </div>
            
            {/* {carrito.length > 0 && (
                <div className="checkout__right">
                    <Subtotal></Subtotal>
                </div>
            )} */}
        </div>
    );
}

//trae las variables globales
const mapStateToProps = state => {
    return {
        carrito: state.carrito,
    }
}

export default connect(mapStateToProps)(Checkout)