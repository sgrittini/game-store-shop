//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarGameStore from "./component/NavBar/NavBarGameStore";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetail from "./component/ItemDatail/ItemDetail";
//import Footer from "./component/Footer/Footer";
import Cart from "./component/CartWidget/Cart"
import CartProvider from './context/CartProvider';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBarGameStore/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} /> 
          <Route path="/categoria/:nombreCategoria" element={<ItemListContainer/>} /> 
          <Route path="/item/:id" element={<ItemDetail/>} /> 
          <Route path="/carrito" element={<Cart/>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>  
    </CartProvider>
    
  );
}

export default App;
