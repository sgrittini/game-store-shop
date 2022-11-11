import { useState } from "react";
import Button from "react-bootstrap/Button";
import { HiChevronUp } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

const ItemCount = ({unidadesStock = 99}) => {
  const [unidades, setUnidades] = useState(()=>{
    if (unidadesStock>0) {
      return 1;
    }
    else{
      return 0;
    }
  }
  );

  const CarritoItem=()=>{
    if (unidadesStock<=0){
      return <p className="pSinStock">No disponible</p>

    }
    else{
      return  <Button className="botonAgregarCarrito" variant="secondary">
      <HiOutlineShoppingCart />
    </Button>
    }
    
    
  }
  function decrementar() {
    if (unidades <= 1) {
      return;
    } else {
      setUnidades(unidades - 1);
    }
  }

  function incrementar() {
    if (unidadesStock>0){
      if (unidades < unidadesStock) {
        setUnidades(unidades + 1);
      } else {
        return;
      }

    }
  }

  return (
    <div className="divCompra">
      <Button
        className="botonIncremetarDecrementar"
        variant="light"
        //onClick={() => setUnidades(unidades + 1)}
        onClick={incrementar}
      >
        <HiChevronUp />
      </Button>
      <p className="textoUnidades">{unidades}</p>
      <Button
        className="botonIncremetarDecrementar"
        variant="light"
        onClick={decrementar}
      >
        <HiChevronDown />
      </Button>
      <CarritoItem/>
    </div>
    
  );
};

export default ItemCount;
