import { Link } from "react-router-dom";
import { SCHeader } from "./Header.styled";

export const Header = () => {
  

  const handleLogout = () => {
    localStorage.removeItem("user_id");
  };

  return (
    <SCHeader>
      <div className="logoPart">
        <Link to="/profile">
          <button className="profileBtn"></button>
        </Link>
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
      <Link to="/">
        <button onClick={handleLogout}>Выйти</button>
      </Link>
    </SCHeader>
  );
};
