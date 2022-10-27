import carrito from "./carrito.png";

const CartWidget = () => {
    return (
        <div className="divCarrito">
          <a href="#">
            <img className="carrito" src={carrito} alt="Carrito" href="#" />
          </a>
        </div>
    );
}

export default CartWidget