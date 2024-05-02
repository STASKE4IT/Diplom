import { useEffect, useState } from "react";
import { Header } from "../../UI/Header/Header";
import { IJobResponse } from "../../../api/types";
import { SCFavoritePage } from "./FavoritesPage.styled";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../UI/Theme/Theme";

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<IJobResponse[]>([]);

  // Получение сохраненной темы из localStorage
  const initialTheme = localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("Favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const removeFromLocalStorage = (jobId: string) => {
    if (jobId) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.id && fav.id.toString() !== jobId.toString()
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
    }
  };

  const isFavorite = (jobId: string) => {
    return favorites.some(
      (fav) => fav.id && fav.id.toString() === jobId.toString()
    );
  };

  // Функция для обновления темы и сохранения ее значения в localStorage
  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  return (
    <>
      {/* Передаем функцию для переключения темы в Header */}
      <Header toggleTheme={toggleTheme} />
      {/* Передаем текущую тему в ThemeProvider */}
      <ThemeProvider theme={theme}>
        <SCFavoritePage>
          <h1>Favorite vacancy: {favorites.length}</h1>
          <div className="FavWorkCardFrame">
            {favorites.map((favorite, index) => (
              <div className="FavWorkCard" key={index}>
                <p>
                  <span>Job Vacancy: </span>
                  {favorite.name}
                </p>
                <p>
                  <span>Company: </span>
                  {favorite.company}
                </p>
                <Link to={`/vakancy/${favorite.id}`}>
                  <button>MORE</button>
                </Link>
                <img
                  src="./src/images/favorite.svg"
                  alt=""
                  className={classNames({
                    off: !isFavorite(String(favorite.id)),
                  })}
                  onClick={() => removeFromLocalStorage(String(favorite.id))}
                />
                <img
                  src="./src/images/favorite2.svg"
                  alt=""
                  className={classNames({
                    off: !isFavorite(String(favorite.id)),
                  })}
                  onClick={() => removeFromLocalStorage(String(favorite.id))}
                />
              </div>
            ))}
          </div>
        </SCFavoritePage>
      </ThemeProvider>
    </>
  );
};
