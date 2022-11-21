import Button from "react-bootstrap/Button";
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import "./style.css";

const ItemCount = ({setUnidades,stock}) => {


  function decrementar() {
  
      setUnidades((currentValue)=>{
        if(currentValue>1){
          return currentValue - 1;
        }
        else{
          return 1;
        }
        ;
      })
  }
  function incrementar() {
    
        setUnidades((currentValue)=>{
          if(currentValue < stock){
            return currentValue + 1;

          }
          else
          {
            return currentValue;
          }
        })
      }



  return (
    <div className="divCompra">
      <Button
        className="botonIncremetarDecrementar"
        variant="light"
        onClick={incrementar}
      >
        <HiChevronUp />
      </Button>
      <Button
        className="botonIncremetarDecrementar"
        variant="light"
        onClick={decrementar}
      >
        <HiChevronDown />
      </Button>
    </div>
    
  );
};

export default ItemCount;
