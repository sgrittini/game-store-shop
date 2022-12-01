import {createContext,useState} from 'react';
import {createOrder} from '../Data/productos'
export const cartContext = createContext([]);

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    
    const addToCart =(producto,cantidad)=>{
       //console.log("se selecciono addToCart")
        let item = cart.find((item)=>item.id==producto.id);
        
        if(item){
      
            cantidad=item.cantidad+cantidad;
            //removeItem(producto.id);
            let carrito = cart.filter((itemFind) => itemFind.id != producto.id)
            
            //setCart([...cart,{...producto,cantidad}]);
            setCart([...carrito,{...producto,cantidad}]);
        }
        else{
            setCart([...cart,{...producto,cantidad}]);
        }
    } 

    const removeItem =(id)=>{
        //console.log("Eliminamos Item:"+id);
        setCart(
            cart.filter((item) => item.id != id)
        );
        //console.log(cart);
    } 

    const cleanItem =()=>{
        setCart([]);
     }
     
    const confirmar =(importeTotal,formulario)=>{
        createOrder(cart,importeTotal,formulario)
        //console.log(formulario);
        
        //setCart([]);
        cleanItem();
     } 

    return(
    <cartContext.Provider value={{cart,addToCart,removeItem,cleanItem,confirmar}}>
        {children}
    </cartContext.Provider>    
)
}
export default CartProvider;