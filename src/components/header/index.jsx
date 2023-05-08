import HeaderStyle from './style';
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const myImage = require("../../imgs/logo.png");
const Header = ()=> (
  <HeaderStyle>
    <header>
      <div>
        <img src={myImage} alt='' />
        <Link to="/"><p>Minimal <span>Shop</span>ping</p></Link>
      </div>
      <div>
        <Link to="/login"><BsFillPersonFill size={25} color="#5b6871"/></Link>
      </div>
    </header>
  </HeaderStyle>
);
export default Header
