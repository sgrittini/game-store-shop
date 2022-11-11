import "./style.css";
import ItemCount from "./ItemCount";
import Item from "../Item/Item";
//import { productos } from "./productos";
import { productos } from "../Data/productos";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"




const ItemListContainer = () => {
  const [listaProducto, setListaProducto] = useState([]);
  const {nombreCategoria} = useParams();
  //console.log(nombreCategoria);

  useEffect(() => {
    getProductos.then((response) => {
      setListaProducto(response);
    });
  }, [nombreCategoria]);

  const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(nombreCategoria){
        const filterCategoria = productos.filter((elProducto)=>{
          return elProducto.categoria===nombreCategoria;
        });
        resolve(filterCategoria);
      }
      else{
      resolve(productos);
      }
    }, 500);
  });



  return (
    <div className="bodyItem">
      {listaProducto.map((producto) =>(
        <div key ={producto.id} className="divItem">
          {/* {console.log(`paso el prod: ${producto.id}`)}; */}
          <Item name={producto.name} precio={producto.precio} id={producto.id}/>
          <ItemCount unidadesStock={producto.stock}/>
        </div> 
      ))}
    </div>
  );
};

export default ItemListContainer;
