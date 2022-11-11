import "./style.css";
import {NavLink} from 'react-router-dom';
import { HiOutlinePlusCircle } from "react-icons/hi";
const Item = ({name,precio,id}) => {
  return (
      <div className="detailItem">
         <h4>{name} <NavLink to={`/item/${id}`}><HiOutlinePlusCircle className="masDatos"/></NavLink></h4>
        <h3>${precio}</h3>
      </div>
 
  )
}

export default Item