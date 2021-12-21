import React from 'react';
import './styles/CheckProduct.css';
import {connect} from 'react-redux'
import {removeCarrito} from '../actions'

function CheckProduct({id, title, image, price, description,removeCarrito}) {
    const removeFromBasket = () => {
        removeCarrito({id})
    };

    return (
        <div className='checkoutProduct'>
            <img src={`http://drive.google.com/uc?export=view&id=${image}`} alt="Imagen Carrito" className='checkoutProduct__image'/>
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    <p>{description}</p>
                </p>
                {/* <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div> */}
                <button onClick={removeFromBasket} className='checkoutProduct__button'>Remove from basket</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    removeCarrito
}
//trae las variables globales
const mapStateToProps = state => {
    return {
        usuario: state.usuario,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckProduct)