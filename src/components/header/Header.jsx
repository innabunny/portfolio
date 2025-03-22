import { Link, NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import icon from "../../assets/github.png";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FaRegCalendarCheck } from "react-icons/fa";

export default function Header({translateRU, translateEN, isTranslate}) {
  
  return (
<>
     <Nav className='header'>
      <Nav.Link href="https://github.com/innabunny" target="_blank" className="header__link"><img src={icon} className="header__img"></img></Nav.Link>
        <ul className="header__links">
          <li><Link to='/' className="header__link"><AiOutlineHome /> {isTranslate ? 'Home' : 'Главная'}</Link></li>
          <li><Link to='/about' className="header__link"><AiOutlineUser /> {isTranslate ? 'About' : 'Обо мне'}</Link></li>
          <li><Link to='/resume' href="#contacts" className="header__link"><CgFileDocument /> {isTranslate ? 'Resume' : 'Резюме'}</Link></li>
          <li><Link to='/project' href="#contacts" className="header__link"><FaRegCalendarCheck /> {isTranslate ? 'Projects' : 'Проекты'}</Link></li>
        </ul>
      <div>
        <button className="header__btn" onClick={translateRU}>RU</button>
        <button className="header__btn" onClick={translateEN}>EN</button>
      </div>
      </Nav>
</>
  );
}