import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ data=[] }) => {
  return (
   data.map(juegos => <Item key={juegos.id} info={juegos}/>)
  );
}

// const ItemList = ({data=[]}) => {
//     return (
//       data.map(juegos => <Item key={juegos.id} info={juegos} />)
//     );
//   }

export default ItemList;
