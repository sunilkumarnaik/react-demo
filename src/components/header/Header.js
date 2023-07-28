import { Title } from "./Title";
import "../../css/header.css";
import logo from "../../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} height="40px" width="40px" />
      </Link>
      <div>Foodie</div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/signin">SignIn</Link>
          </li>
          <li>
            <Link to="/kart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
