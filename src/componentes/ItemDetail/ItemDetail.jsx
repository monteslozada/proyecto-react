
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ data }) => {
  const [gotoCart, setGotoCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGotoCart(true)
    addProduct(data, quantity);
  };





  return (
    <div className='container'>
      <div className='detail'>
        <img className=' detail__image' src={data.imagen} alt="" />
        <div className='content'>
          <h1>{data.description}</h1>
          <p>Precio:${data.price}</p>
          {
            gotoCart
              ? <Link to='/category/cart'>
                <button className="button is-danger">terminar compra </button>
                </Link>
              : <ItemCount initial={1} stock={10} onAdd={onAdd} />
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
