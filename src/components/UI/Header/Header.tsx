import { Link } from "react-router-dom";
import { SCHeader } from "./Header.styled";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [isThemeButtonClicked, setIsThemeButtonClicked] = useState(false);

  const handleThemeButtonClick = () => {
    setIsThemeButtonClicked(true);
    setTimeout(() => {
      toggleTheme();
      setIsThemeButtonClicked(false);
    }, 1600);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_id");
  };

  return (
    <SCHeader>
      <Link to="/profile">
        <button className="profileBtn"></button>
      </Link>
      <div className="logoPart">
        <img src="./src/images/logo2.png" alt="" id="logo" />
      </div>
      <nav id="navigation">
        <Link to="/main" className="a">
          Main
        </Link>
        <Link to="/favorites" className="a">
          Favorites
        </Link>
        <Link to="/categories" className="a">
          Categories
        </Link>
        <Link to="/companies" className="a">
          Companies
        </Link>
        <Link to="/coaches" className="a">
          Coaches
        </Link>
        <Link to="/main" className="a">
          Page5
        </Link>
      </nav>
      {/* Кнопка для переключения темы */}
      <div className="ChangeThemeFrame">
        <img
          className={`ChangeThemeBtn ${isThemeButtonClicked ? "animate" : ""}`}
          onClick={handleThemeButtonClick}
          src="./src/images/changeTheme.png"
        />
        <p onClick={handleThemeButtonClick}>Change Theme</p>
      </div>
      <Link to="/">
        <button className="LogOutBtn" onClick={handleLogout}>
          LogOut
        </button>
      </Link>
      <div className="PopUpCategories"></div>
    </SCHeader>
  );
};
