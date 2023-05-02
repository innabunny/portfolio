import "./Header.css"
import icon from "../../img/github.png"

export default function Header() {
  return (
    <header className="header">
      <a href="https://github.com/innabunny" target="_blank" className="header__link"><img src={icon} className="header__img"></img></a>
      <nav>
        <ul className="header__links">
          <li><a href="#project" className="header__link">Проекты</a></li>
          <li><a href="#contacts" className="header__link">Мои контакты</a></li>
        </ul>
      </nav>
      <div>
        <button className="header__btn">Ru</button>
        <button className="header__btn">En</button>
      </div>
    </header>
  );
}