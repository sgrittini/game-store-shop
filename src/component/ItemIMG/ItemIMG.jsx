import "./style.css";
import {getById} from '../../Data/productos';
import {useEffect,useState} from 'react';


  

const ItemIMG = ({id}) => {
    //const producto = productos.find((producto)=>producto.id == id);
    const [item, setItem] = useState("");
    useEffect(() => {
        getById(setItem,id);
       }, []);
    return (
        <div>
           {/*  {producto.img ? <img className ="fotos" src={producto.img}></img> : <h2 style = {{color:'red',border:'solid 1px',width:'200px',height:'200px',textAlign:'center',paddingTop:'60px'}}>Sin imagen</h2>} */}
            {/* {console.log("ruta:"+producto.img)} */}
            {item.img ? <img alt={item.name} className ="fotos" src={item.img}></img>:<h2 className="sinFoto"> Sin imagen</h2>}

        </div>
     
      )
}

export default ItemIMG