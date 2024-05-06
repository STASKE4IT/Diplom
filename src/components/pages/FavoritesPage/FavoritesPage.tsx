import { useEffect, useState } from "react";
import { Header } from "../../UI/Header/Header";
import { IJobResponse } from "../../../api/types";
import { SCFavoritePage } from "./FavoritesPage.styled";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../UI/Theme/Theme";

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<IJobResponse[]>([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    console.log("Fetching favorites from localStorage...");
    const savedFavorites = JSON.parse(
      localStorage.getItem("Favorites") || "[]"
    );
    setFavorites(savedFavorites);
    console.log("Favorites:", savedFavorites);
  }, []);

  const removeFromLocalStorage = (jobId: string) => {
    if (jobId) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.id && fav.id.toString() !== jobId.toString()
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
      console.log("Removed job with ID", jobId, "from favorites.");
    }
  };

  const isFavorite = (jobId: string) => {
    return favorites.some(
      (fav) => fav.id && fav.id.toString() === jobId.toString()
    );
  };

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
    console.log("Toggled theme to", newTheme === darkTheme ? "dark" : "light");
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} />
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
                  className={isFavorite(String(favorite.id)) ? "" : "off"}
                  onClick={() => removeFromLocalStorage(String(favorite.id))}
                />
                <img
                  src="./src/images/favorite2.svg"
                  alt=""
                  className={isFavorite(String(favorite.id)) ? "" : "off"}
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
