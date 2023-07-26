import React ,{useState, useEffect}from 'react'
import Title from '../Title/Title';
import './ItenListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs,query, where} from 'firebase/firestore'


export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const{categoriaId}=useParams();

  useEffect(() => {    
  const querydb = getFirestore ();
  const querycollection = collection(querydb, 'juegos')   
    if (categoriaId){
      const queryFilter = query(querycollection, where('categoria', '==', categoriaId)); 
 getDocs(queryFilter)
 .then(res => setData(res.docs.map(juegos => ({id: juegos.id, ...juegos.data() }))))       
    } else{
     getDocs(querycollection)
    .then(res => setData(res.docs.map(juegos =>({ id: juegos.id, ...juegos.data()}))))
    }  
    

    
  }, [categoriaId]);





  return (
   <div className='margin-menu'>
     <Title name={texto} />  
    <ItemList data={data}/>
   </div>
    
  
  )
}

export default ItemListContainer;
