import { useEffect, useState } from "react";
import { useFindJobMutation } from "../../../api/workCardApi";
import { Header } from "../../UI/Header/Header";
import { SCMainPage } from "./MainPage.styled";
import { IJobResponse } from "../../../api/types";

export const MainPage = () => {
  const [findJob] = useFindJobMutation();
  const [jobs, setJobs] = useState<IJobResponse[]>([]);
  const [favorites, setFavorites] = useState<IJobResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findJob({
          page: "1",
          items_per_page: "20",
          page_count: "",
        });

        if ("data" in response) {
          console.log(response.data);
          const jobData = response.data.results.map((result: any) => ({
            name: result.name,
            contents: result.contents,
            0: result[0],
            short_name: result.short_name,
            levels: result.levels,
            publication_date: result.publication_date,
            id: result.id,
            company: result.company.name,
            isFavorite: false,
          }));
          setJobs(jobData);
        } else {
          console.error(response.error);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
    const updatedFavorites = favorites.filter(fav => fav.id !== jobId);
    setFavorites(updatedFavorites);
    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
  };
  

  return (
    <div className="MainPage">
      <Header />
      <SCMainPage>
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
                <img
                  src="./src/images/favorite.svg"
                  alt=""
                  className={favorites.some(fav => fav.id === job.id) ? "off" : ""}
                  onClick={() => addToLocalStorage(job)}
                />
                <img
                  src="./src/images/favorite2.svg"
                  alt=""
                  className={!favorites.some(fav => fav.id === job.id) ? "off" : ""}
                  onClick={() => removeFromLocalStorage(job.id)}
                />
            </div>
          ))}
        </div>
      </SCMainPage>
    </div>
  );
};
