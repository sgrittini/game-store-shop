import { useEffect, useState, useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import "./style.css";
import Button from "react-bootstrap/Button";
import ItemIMG from "../ItemIMG/ItemIMG";

const Cart = () => {
  const { cart, removeItem, cleanItem, confirmar } = useContext(cartContext);
  const [formulario, setForumlario] = useState({
    name: "",
    telefono: "",
    email: "",
    repetirEmail: "",
  });
  useEffect(() => {
  }, [cart]);

  const myHandler = (event) => {

    setForumlario({
      ...formulario,
      [event.target.name]: event.target.value,
    });
  };

  let importe = 0;
  let unidades = 0;
  cart.map((producto) => {
    importe = importe + producto.precio * producto.cantidad;
    unidades = unidades + producto.cantidad;
  });
 
  return (

    <>
      <div className="detalleCarrito">
        {cart.length == 0 && <h4>Carrito vacio</h4>}
        {cart.map((producto) => (
          <div className="divCarrito" key={producto.id}>
            <div>
              <ItemIMG id={producto.id} />
              <h5>{producto.name}</h5>
              <h5>{`Unidades compradas: ${producto.cantidad}`}</h5>
              <h5>Importe del item:{producto.precio}</h5>
              <h5>subtotal:{producto.precio * producto.cantidad}</h5>
            </div>
            <div>
              <Button variant="primary" onClick={() => removeItem(producto.id)}>
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="totalizador">
        <Button variant="secondary" onClick={() => cleanItem()}>
          limpiar carrito
        </Button>
        <div>
          {importe != 0 && (
            <>
              <h2>Total a pagar: {importe}</h2>
              <h2>Total a unidades: {unidades}</h2>
              <div className="formulario">
                <h2>Complete los datos:</h2>
                <input
                  name="name"
                  type="text"
                  placeholder="nombre"
                  value={formulario.name}
                  onChange={myHandler}
                ></input>
                <input
                  name="telefono"
                  type="text"
                  placeholder="telefono"
                  value={formulario.telefono}
                  onChange={myHandler}
                ></input>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  value={formulario.email}
                  onChange={myHandler}
                ></input>
                <input
                  name="repetirEmail"
                  type="text"
                  placeholder="Repetir Email"
                  value={formulario.repetirEmail}
                  onChange={myHandler}
                ></input>
              </div>

              {(formulario.email === formulario.repetirEmail && (formulario.email !="")) && <Button
                variant="primary"
                onClick={() => confirmar(importe, formulario)}
              >
                Confirmar Compra
              </Button>}
            </>
          )}
          ;
        </div>
      </div>
    </>
  );
};

export default Cart;
