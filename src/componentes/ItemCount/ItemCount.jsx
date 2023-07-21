import React,{useEffect, useState} from 'react'
import './ItemCount.css'


export const ItemCount = ({initial,stock,onAdd}) => {
    const [ count, setCount] = useState(parseInt(initial));
    

    function handleClickSuma(){
    
        setCount( count + 1 );
     }
 
     function handleClickResta(){
         
             setCount( count - 1);
         }

         useEffect(()=>{
            setCount(parseInt(initial));
         }, [initial])        
   

  return (
    <div className='counter'>
        <button disabled={count <= 1} onClick={handleClickResta}>-</button>
        <span>{count}</span>
        <button  disabled={count >= stock} onClick={handleClickSuma}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={ ()=> onAdd(count)}>Agregar al carrito</button>
        </div>
      
    </div>
  )
}

export default ItemCount;
