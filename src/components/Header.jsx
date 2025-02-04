import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Головна</Link> | 
        <Link to="/projects">Проєкти</Link> | 
        <Link to="/contacts">Контакти</Link>
      </nav>
    </header>
  );
};