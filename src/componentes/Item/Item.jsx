import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`} className='film'>
      <img src={info.imagen} alt='' />
      <p>{info.name}</p>
    </Link>
  )
}

export default Item;
