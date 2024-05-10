import { Link } from "react-router-dom";
import { SCHeader } from "./Header.styled";
import React, { useState } from "react";
import { CategoriesPopUp } from "../../pages/Categories/CategoriesPopUp";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [isThemeButtonClicked, setIsThemeButtonClicked] = useState(false);
  const [isCategoriesPopupVisible, setIsCategoriesPopupVisible] =
    useState(false);

  const handleThemeButtonClick = () => {
    setIsThemeButtonClicked(true);
    setTimeout(() => {
      toggleTheme();
      setIsThemeButtonClicked(false);
    }, 1600);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("Jobs");
    localStorage.removeItem("Companies");
    localStorage.removeItem("Theme");
  };

  const toggleCategoriesPopup = () => {
    setIsCategoriesPopupVisible(!isCategoriesPopupVisible);
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
        <Link to="/companies" className="a">
          Companies
        </Link>
        <a href="#" className="a" onClick={toggleCategoriesPopup}>
          {isCategoriesPopupVisible ? (
            <>
              <img src="./src/images/down.svg" alt="" />
              Categories
            </>
          ) : (
            <>
              <img src="./src/images/up.svg" alt="" />
              Categories
            </>
          )}
        </a>
        <Link to="/favorites" className="a">
          <img src="./src/images/favorite2.svg" alt="" />
          Favorites
        </Link>
        <Link to="/coaches" className="a">
          Coaches
        </Link>
        <Link to="/loaders" className="a">
          Loaders
        </Link>
      </nav>
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
      <div className="PopUpCategories">
        {isCategoriesPopupVisible && (
          <CategoriesPopUp toggleTheme={toggleTheme} />
        )}
      </div>
    </SCHeader>
  );
};
