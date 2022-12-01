import "./style.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {getById} from '../../Data/productos'
import ItemCount from "../ItemCount/ItemCount";
import ItemIMG from '../ItemIMG/ItemIMG'
import { HiOutlineShoppingCart } from "react-icons/hi";
import Button from "react-bootstrap/Button";

 import {cartContext} from '../../context/CartProvider'





const ItemDetail = () => {
  const { id } = useParams();

   const {addToCart} = useContext(cartContext);
   
   const [unidades, setUnidades] = useState(1);
   const [item, setItem] = useState("");

  //const item = productos.find((item) => item.id == id);
  useEffect(() => {
    getById(setItem,id);
   }, []);
  
  


  
 const CarritoItem=()=>{
    return  <Button onClick={()=>addToCart(item,unidades)} className="botonAgregarCarrito" variant="secondary">
    <HiOutlineShoppingCart />
  </Button>}  

  useEffect(() => {
    setUnidades(unidades);
   }, [unidades]);
 
  return (
    <div className="unItem">
      <ItemIMG id = {id}/>
      <div className="atributosDeUnItem">
        <h4>id:</h4>
        <h3>{item.id} </h3>
      </div>
      <div className="atributosDeUnItem">
        <h4>nombre:</h4>
        <h3>{item.name}</h3>
      </div>
      <div className="atributosDeUnItem">
        <h4>categoria:</h4>
        <h3>{item.categoria} </h3>
      </div>
      <div className="atributosDeUnItem">
        <h4>stock:</h4>
        <h3>{item.stock} </h3>
      </div>
      <div className="atributosDeUnItem">
        <h4>precio:</h4>
        <h3>${item.precio} </h3>
      </div>
      <p className="textoUnidades">{`${unidades}`}</p>
      <div className="divCompra">
      <ItemCount setUnidades={setUnidades} stock={item.stock}/>
      <CarritoItem/>
      {/* <button onClick={()=>addToCart(item,unidades)}>Agregar</button> */}
      </div>
    </div>
  );
};

export default ItemDetail;
