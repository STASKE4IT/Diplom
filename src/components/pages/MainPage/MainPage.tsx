import { useEffect, useState } from "react";
import { Header } from "../../UI/Header/Header";
import { SCMainPage } from "./MainPage.styled";
import { IJobResponse } from "../../../api/types";
import { useFindJobMutation } from "../../../api/workCardApi";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [jobs, setJobs] = useState<IJobResponse[]>([]);
  const [favorites, setFavorites] = useState<IJobResponse[]>([]);

  const [findJob] = useFindJobMutation();

  useEffect(() => {
    findJob({
      page: "1",
      items_per_page: "20",
      page_count: "",
    }).unwrap()
    .then((response) => {
      console.log(response);
      const resultsArray = response.results;
      if (Array.isArray(resultsArray)) {
        const jobData = resultsArray.map((result: any) => ({
          name: result.name,
          contents: result.contents,
          short_name: result.short_name,
          levels: result.levels,
          publication_date: result.publication_date,
          id: result.id,
          company: result.company.name,
          isFavorite: false,
        }));
        setJobs(jobData);
      } else {
        console.error("Response results is not an array");
      }
    })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("Favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("Jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addToLocalStorage = (job: IJobResponse) => {
    const updatedFavorites = [...favorites, job];
    setFavorites(updatedFavorites);
    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromLocalStorage = (jobId: string) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== jobId);
    setFavorites(updatedFavorites);
    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Header />
      <SCMainPage>
        <div className="MainPage">
          <h1>Актуальные вакансии : {jobs.length} </h1>
          <div className="MainPageFrame">
            {jobs.map((job, index) => (
              <div key={index} className="jobList">
                <p>
                  <span>Вакансия: </span>
                  {job.name}
                </p>
                <p>
                  <span>Компания: </span>
                  {job.company}
                </p>
                <Link to={`/vakancy/${job.id}`}>
                  <button>Подробнее</button>
                </Link>{" "}
                <img
                  src="./src/images/favorite.svg"
                  alt=""
                  className={
                    favorites.some((fav) => fav.id === job.id) ? "off" : ""
                  }
                  onClick={() => addToLocalStorage(job)}
                />
                <img
                  src="./src/images/favorite2.svg"
                  alt=""
                  className={
                    !favorites.some((fav) => fav.id === job.id) ? "off" : ""
                  }
                  onClick={() => removeFromLocalStorage(job.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </SCMainPage>
    </>
  );
};
