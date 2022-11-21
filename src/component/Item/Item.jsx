import "./style.css";
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Item = ({name,precio,id,stock}) => {
  const BotonComprar=()=>{
    if (stock<=0){
      return <p className="pSinStock">No disponible</p>

    }
    else{
      //return  <Button variant="secondary">Comprar</Button>
      return  <NavLink to={`/item/${id}`}><Button variant="secondary">Comprar</Button></NavLink>
    }
    
    
  }

  return (
      <div className="detailItem">
         <h4>{name} </h4>
        <h3>${precio}</h3>
        {/* <NavLink to={`/item/${id}`}><HiOutlinePlusCircle className="masDatos"/></NavLink> */}
       
            <BotonComprar/>
       </div>
 
  )
}

export default Item