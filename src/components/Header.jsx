import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="nav nav__list">
        <Link to="/" className="nav__item">Головна</Link> | 
        <Link to="/projects">Проєкти</Link> | 
        <Link to="/contacts">Контакти</Link>
        <Link to="/crypto-wallet">crypto wallet</Link>
      </nav>
    </header>
  );
};