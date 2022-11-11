//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar2 from "./component/NavBar/NavBar2";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetail from "./component/ItemDatail/ItemDetail";
import Footer from "./component/Footer/Footer";
import Cart from "./component/CartWidget/Cart"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} /> 
          <Route path="/categoria/:nombreCategoria" element={<ItemListContainer/>} /> 
          <Route path="/item/:id" element={<ItemDetail/>} /> 
          <Route path="/carrito" element={<Cart/>} />

        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
