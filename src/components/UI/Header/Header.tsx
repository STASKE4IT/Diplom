import { Link } from "react-router-dom";
import { SCHeader } from "./Header.styled";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const handleLogout = () => {
    localStorage.removeItem("user_id");
  };

  return (
    <SCHeader>
      <div className="logoPart">
        <img src="./src/images/logo2.png" alt="" id="logo" />
      </div>
      <nav id="navigation">
        <Link to="/main" className="a">
          MainPage
        </Link>
        <Link to="/favorites" className="a">
          Favorites
        </Link>
        <Link to="/main" className="a">
          Page2
        </Link>
        <Link to="/main" className="a">
          Page3
        </Link>
        <Link to="/main" className="a">
          Page4
        </Link>
        <Link to="/main" className="a">
          Page5
        </Link>
      </nav>
      {/* Кнопка для переключения темы */}
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">
        <button onClick={handleLogout}>Выйти</button>
      </Link>
    </SCHeader>
  );
};
