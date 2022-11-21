import {createContext,useState} from 'react';

export const cartContext = createContext([]);

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    
    const addToCart =(producto,cantidad)=>{
        console.log("se selecciono addToCart")
        let item = cart.find((item)=>item.id==producto.id);
        
        if(item){
            alert("Ya existe el producto en su carrito!!!!");        
        }
        else{
            setCart([...cart,{...producto,cantidad}]);
        }
    } 

    const removeItem =(id)=>{
        console.log("Eliminamos Item:"+id);
        setCart(
            cart.filter((item) => item.id != id)
        );
        console.log(cart);
   
    } 
    const cleanItem =(producto)=>{
        setCart([]);
   
    } 

   

    return(
    <cartContext.Provider value={{cart,addToCart,removeItem,cleanItem}}>
        {children}
    </cartContext.Provider>    
)
}
export default CartProvider;