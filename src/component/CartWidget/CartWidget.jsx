import carrito from "./carrito.png";
import {useContext} from 'react';
import {cartContext} from '../../context/CartProvider';


const CartWidget = () => {
    const {cart} = useContext(cartContext);
    return (
        <div className="carrito">
            <img className="carrito" src={carrito} alt="Carrito"  />
            {cart.length >0 && <h2>{cart.length}</h2>}
            
        </div>
    );
}

export default CartWidget