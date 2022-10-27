import "./style.css";
import  CartWidget  from "./CartWidget";
import Logo from "./Logo";
import NombreTienda from "./NombreTienda"

const NavBar = () => {
    return (
        <nav>
          <NombreTienda/>
          <div className="divNavBar">
            <Logo/>
            <div>
              <ul className="navBar">
                <li>
                  <a href="#">Videos Juegos</a>
                </li>
                <li>
                  <a href="#">Consolas</a>
                </li>
                <li>
                  <a href="#">Accesorios</a>
                </li>
                <li>
                  <a href="#">Pc</a>
                </li>
                <li>
                  <a href="#">SmartPhones</a>
                </li>
              </ul>
            </div>
            <CartWidget/>
          </div>
        </nav>
      );
}

export default NavBar