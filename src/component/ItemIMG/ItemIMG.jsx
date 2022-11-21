import "./style.css";
import {productos} from '../../Data/productos';

const ItemIMG = ({id}) => {
    const producto = productos.find((producto)=>producto.id == id);
    return (
        <div>
           {/*  {producto.img ? <img className ="fotos" src={producto.img}></img> : <h2 style = {{color:'red',border:'solid 1px',width:'200px',height:'200px',textAlign:'center',paddingTop:'60px'}}>Sin imagen</h2>} */}
            {/* {console.log("ruta:"+producto.img)} */}
            {producto.img ? <img className ="fotos" src={producto.img}></img>:<h2 className="sinFoto"> Sin imagen</h2>}

        </div>
     
      )
}

export default ItemIMG