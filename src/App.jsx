

import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemdetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./componentes/Cart/Cart";
import React from 'react';
import CartProvider from "./context/CartContext";



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/category/Cart" element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )

}

export default App;
