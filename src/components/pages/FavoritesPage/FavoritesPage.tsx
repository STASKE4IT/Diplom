import { useEffect, useState } from "react";
import { Header } from "../../UI/Header/Header";
import { IJobResponse } from "../../../api/types";
import { SCFavoritePage } from "./FavoritesPage.styled";
import classNames from "classnames";

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<IJobResponse[]>([]);

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

  return (
    <>
      <Header />
      <SCFavoritePage>
        <h1>Избранные вакансии</h1>
        <div className="FavWorkCardFrame">
          {favorites.map((favorite, index) => (
            <div key={index} className="FavWorkCard">
              <p>
                <span>Вакансия: </span>
                {favorite.name}
              </p>
              <p>
                <span>Компания: </span>
                {favorite.company}
              </p>
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
    </>
  );
};
