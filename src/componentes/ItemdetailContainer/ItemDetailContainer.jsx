
import React, {useState, useEffect}from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';





const juegos =[  
  {
 id: 1,
 name: "God of ward",
 description: "(God of War) es un videojuego de acción y aventura desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Fue lanzado en exclusiva para PlayStation 4 en abril de 2018.",
 imagen: "https://http2.mlstatic.com/D_NQ_NP_990023-MLA50864327350_072022-V.webp",
 price: 5000,
 categoria: "Playstation",
 stock: 10
},
{
 id: 2,
 name: "horizon",
 description:"Horizon Zero Dawn es un juego de acción y aventura para PS4 en un mundo post-apocalíptico con máquinas y tribus humanas",
 imagen: "https://http2.mlstatic.com/D_NQ_NP_749753-MLA52350822091_112022-V.webp",
 price: 1000,
 categoria: "Playstation"
},
{
 id: 3,
 name: "battlefield",
 description: "Battlefield es una serie de juegos de disparos en primera persona con combates militares a gran escala, vehículos y modos de juego multijugador emocionantes",
 imagen: "https://http2.mlstatic.com/D_NQ_NP_861677-MLA45386980833_032021-V.webp",
 price: 1000,
 categoria:"Playstation"
},





{
 id: 4,
 name: "Zelda Breath of the Wild",
 description: "The Legend of Zelda: Breath of the Wild es un juego de acción y aventura en mundo abierto donde los jugadores exploran Hyrule y enfrentan desafiantes mazmorras y enemigos.",
 imagen: "https://http2.mlstatic.com/D_NQ_NP_951591-MLA40862922196_022020-V.webp",
 price: 1000,
 categoria: "Nintendo"
},

{
 id: 5,
 name: "Mario Odyssey",
 description:"Super Mario Odyssey es un juego de plataformas en el que Mario emprende una aventura por distintos reinos para rescatar a la Princesa Peach de Bowser.",
 imagen: "https://http2.mlstatic.com/D_NQ_NP_958303-MLA40864140097_022020-V.webp",
 price: 1000,
 categoria: "Nintendo"
},

{
 id: 6,
 name: "Tomb Raider",
 description: "Tomb Raider es un juego de acción y aventura que sigue las aventuras de la arqueóloga Lara Croft en su búsqueda de tesoros y descubrimientos arqueológicos.",
imagen: "https://http2.mlstatic.com/D_NQ_NP_706320-MLA44545022194_012021-V.webp",
 price: 1000,
 categoria: "Xbox"
},
{
 id: 7,
 name: "Ghost Recon",
 description: "Ghost Recon es un juego de disparos táctico en tercera persona en el que los jugadores forman parte de un equipo de soldados de élite y llevan a cabo misiones encubiertas.",
 imagen: "https://http2.mlstatic.com/D_NQ_NP_750855-MLA44503977016_012021-V.webp",
 price: 1000,
 categoria: "Xbox"
},

{
 id: 8,
 name: "Tony Hawk's 5",
 description: "Tony Hawk's 5 es un juego de skateboarding en el que los jugadores pueden realizar trucos y maniobras en diferentes escenarios y competir en desafíos.",
 imagen: "https://http2.mlstatic.com/D_NQ_NP_786011-MLA20457570813_102015-V.webp",
 price: 1000,
 categoria: "Xbox"
},
];



export const ItemDetailContainer = () => {
const[ data, setData]= useState({});
const { detalleId}= useParams();

useEffect (()=>{

  const getData=new Promise(resolve=>{
    setTimeout(()=>{
      resolve(juegos);
    }, 3000)
  });
 
   getData.then(res => setData(res.find(juegos => juegos.id === parseInt(detalleId))));

},[detalleId])



  return (
<ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;
