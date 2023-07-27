import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import {addDoc, collection,getFirestore } from 'firebase/firestore'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
  const { cart, totalPrice } = useCartContext(); // Ajusta la desestructuración aquí

const order ={
buyer:{
name: 'Javier',
email:'javier@gmail.com',
phone:'11234543',
address:'asdd',
  },

  items: cart.map(juegos => ({ id: juegos.id, title: juegos.name, price:juegos.price, quantity: juegos.quantity})),
  total: totalPrice(),
}

const handleClick = () => {
  const db = getFirestore();
  const ordersCollection = collection(db,'orders');
  addDoc( ordersCollection, order)
  .then(({ id }) => console.log(id))

};

  if (cart.length === 0) {
    return (
      <div className='marginCart'>
        <p ><i class="bi bi-emoji-frown"></i> tu carrito esta vacio </p>
        <Link to='/'>hacer compra</Link>
      </div>
    );
  };

  return (
  <div className='marginCart'>
{
  cart.map(product => <ItemCart key={product.id} product={product}/>)
}
<p> total: {totalPrice()}</p>
<button onClick={handleClick}>Comprar</button>
  </div>
  );
};

export default Cart;

