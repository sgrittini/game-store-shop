import carrito from "./carrito.png";

const CartWidget = () => {
    return (
        <div className="carrito">
            <img className="carrito" src={carrito} alt="Carrito"  />
        </div>
    );
}

export default CartWidget