import "./style.css";
import {useParams} from "react-router-dom"
import { productos } from "../Data/productos";
const ItemDetail = () => {

  const {id} = useParams();


  const item = productos.find((item)=>{
    console.log(item.id);
    if(item.id==id){
      return item;
    }
  }
  )
  /*
  id: 1,
    name:"consola 1",
    stock:10,
    categoria:"consolas",
    precio:1000,
  */
  return (
    <div className="unItem">


    <h3>id: {item.id} </h3>
    <h3>{item.name}</h3>
    <h3>{item.categoria} </h3>
    <h3>Unidades disponibles:{item.stock} </h3>
    <h3>${item.precio} </h3>


</div>

  )
}

export default ItemDetail