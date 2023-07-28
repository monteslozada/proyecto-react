import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const [, setOrderId] = useState(null); // Estado para orderId

  const order = {
    buyer: {
      name: 'Javier',
      email: 'javier@gmail.com',
      phone: '11234543',
      address: 'asdd',
    },
    items: cart.map(juegos => ({
      id: juegos.id,
      title: juegos.name,
      price: juegos.price,
      quantity: juegos.quantity
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id);

        window.location.href = `/checkout/${id}`;
      });
  };

  if (cart.length === 0) {
    return (
      <div className='marginCart'>
        <p><i className="bi bi-emoji-frown"></i> Tu carrito está vacío</p>
        <Link to='/'>
          <button className='button is-info'>Hacer compra</button>
          </Link>
      </div>
    );
  }

  return (
    <div className='marginCart'>
      {cart.map(product => <ItemCart key={product.id} product={product} />)}
      <p>Total: {totalPrice()}</p>
      <button className='button is-danger' onClick={handleClick}>Comprar</button>
     <NavLink to='/'>
      <button className='button is-info'>volver al inicio</button>
     </NavLink>
    </div>
  );
};

export default Cart;



