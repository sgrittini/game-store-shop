import "./style.css";
import Item from "../Item/Item";
//import { productos } from "./productos";
import {getAll,getAllByCategory} from '../../Data/productos'
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemIMG from '../ItemIMG/ItemIMG';


const ItemListContainer = () => {
  const [listaProducto, setListaProducto] = useState([]);
  const {nombreCategoria} = useParams();


  useEffect(() => {
    //console.log ("se monto el ItemListContainer");
    return ()=>{
      //console.log ("se desmonto el ItemListContainer");
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    if(nombreCategoria){
      getAllByCategory(setListaProducto,nombreCategoria);
    }
    else{
      getAll(setListaProducto);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombreCategoria]);
 
  return (
    <div className="bodyItem">
      {listaProducto.map((producto) =>(
        <div key ={producto.id} className="divItem">
          <div className="fotosGral">
            <ItemIMG id={producto.id}/>
          </div>  
          <Item name={producto.name} precio={producto.precio} id={producto.id} stock={producto.stock}/>
        </div> 
      ))}
    </div>
  );
};

export default ItemListContainer;
