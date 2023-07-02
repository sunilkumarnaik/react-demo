import { Title } from "./Title";
import "../../css/header.css";
import logo from "../../assets/img/logo.jpeg";
const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} height="40px" width="40px" />
      </a>
      <div>Foodie</div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>Help</li>
          <li>SignIn</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
