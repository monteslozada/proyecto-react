

import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemdetailContainer/ItemDetailContainer";
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Cart from "./componentes/Cart/Cart";


function App() {
  return (

    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemDetailContainer/>}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/detalle/:detalleId'  element={<ItemDetailContainer/>}/>
    
    </Routes>
      <ItemListContainer />
      <ItemDetailContainer />
      <Cart />
    </BrowserRouter>
     
    </>






  )

}

export default App;
