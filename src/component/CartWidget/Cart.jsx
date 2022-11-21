import { useEffect, useState, useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import "./style.css";

const Cart = () => {
  const { cart, removeItem, cleanItem } = useContext(cartContext);

  useEffect(() => {
    console.log("se monto el Cart");
    return () => {
      console.log("se desmonto el Cart");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <h1>Aca va el detalle del carrito</h1>
    <>
   
    <div>
      {cart.map((producto) => (
        <div className="divCarrito">
          <div key={producto.id}>
            <p>{producto.id}</p>
            <p>{producto.name}</p>
            <p>{producto.cantidad}</p>
            <p>Importe del item:{producto.precio * producto.cantidad}</p>
          </div>
          <div>
            <button onClick={() => removeItem(producto.id)}>eliminar1dasdsadsd</button>
          </div>
        </div>
      ))}
     
    </div>
     <div>
     <button onClick={() => cleanItem()}>limpiar carrito</button>
   </div>
   </>
  );
};

export default Cart;
