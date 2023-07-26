
import React from 'react'
import './ItemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ product }) => {
  const { removeProducto } = useCartContext ();
  return (
    <div className='itemCart'>
      <img src={product.imagen} alt={product.name} />
      <div>
        <p>titulo:{product.name}</p>
        <p>cantidad:{product.quantity}</p>
        <p>precio:$ {product.price}</p>
        <p>subtotal:$ {product.quantity * product.price} </p>
        <button onClick={() => removeProducto(product.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCart;
