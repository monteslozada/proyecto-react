import React from 'react';
import "./ItemDetail.css"

const ItemDetail = ({data}) => {
  if (!data || !data.imagen) {
    return <div>No se encontraron datos válidos</div>;
  }
  return (
  <div className='container'>
    <div className='detail'>
      <img  className=' detail__image'src={data.imagen} alt=""/>
      <div className='content'>
        <h1>{data.description}</h1>
      </div>
    </div>
  </div>
  )
}

export default ItemDetail
