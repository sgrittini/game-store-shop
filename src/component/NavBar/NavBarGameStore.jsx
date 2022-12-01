import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,NavLink} from 'react-router-dom';

import  CartWidget  from "../CartWidget/CartWidget";
import Logo from "./Logo";
import NombreTienda from "./NombreTienda"


// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function NavBarGameStore() {
  return (
    <>
    <NombreTienda/>
    <Navbar collapseOnSelect expand="lg" >
      
    
      <Container>

        <NavLink href="#home" to="/"><Logo/> </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="color-text" to="/categoria/videos juegos">Videos Juegos</NavLink>
            <NavLink className="color-text" to="/categoria/consolas">Consolas</NavLink>
            <NavLink className="color-text" to="/categoria/accesorios">Accesorios</NavLink>
            <NavLink className="color-text" to="/categoria/pc">PC</NavLink>
          </Nav>

        </Navbar.Collapse>
        {/* <CartWidget/> */}
        <Link to="/carrito">{<CartWidget/>}</Link>
      </Container>
        
   
    </Navbar>
    </>
  );
}

export default NavBarGameStore;