import React from 'react'
import cart from '../assets/icons/car.png';

const CartWidget = () => {
  return (
    <div className="carrito">
        <img src={cart} className="invertir cart"/>
        <p id="articulos">5</p>
    </div>
  )
}

export default CartWidget