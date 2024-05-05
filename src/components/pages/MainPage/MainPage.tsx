import { useEffect, useState } from "react";
import { Header } from "../../UI/Header/Header";
import { SCMainPage } from "./MainPage.styled";
import { IJobResponse } from "../../../api/types";
import { useFindJobMutation } from "../../../api/workCardApi";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../UI/Theme/Theme";

export const MainPage = () => {
  const [jobs, setJobs] = useState<IJobResponse[]>([]);
  const [favorites, setFavorites] = useState<IJobResponse[]>([]);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? darkTheme : lightTheme;
  });
  const [currentPage, setCurrentPage] = useState(1); // Состояние текущей страницы
  const [totalPages, setTotalPages] = useState(1); // Состояние общего количества страниц
  const [findJob] = useFindJobMutation();

  useEffect(() => {
    findJob({
      page: String(currentPage),
      items_per_page: "20",
      page_count: "",
    })
      .unwrap()
      .then((response) => {
        console.log(response);
        const resultsArray = response.results;
        if (Array.isArray(resultsArray)) {
          const jobData = resultsArray.map((result: any) => ({
            categories: result.categories,
            name: result.name,
            contents: result.contents,
            short_name: result.short_name,
            levels: result.levels,
            publication_date: result.publication_date,
            id: result.id,
            company: result.company.name,
            isFavorite: false,
            location: result.locations,
            type: result.type,
          }));
          setJobs(jobData);
          setTotalPages(response.page_count || 1); // Устанавливаем общее количество страниц
        } else {
          console.error("Response results is not an array");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]); // Обновляем список вакансий при изменении текущей страницы

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("Favorites") || "[]"
    );
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

  // Функция для переключения темы
  const toggleTheme = () => {
    // Текущая тема зависит от предыдущей
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Обновляем текущую страницу при выборе новой страницы
  };

  // Вычисляем начальную и конечную страницы для отображения на пагинации
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <ThemeProvider theme={theme}>
        <SCMainPage>
          <div className="MainPage">
            <h1>Current vacancies : {jobs.length} </h1>
            <div className="MainPageFrame">
              {jobs.map((job, index) => (
                <div key={index} className="jobList">
                  <p>
                    <span>Job Vacancy: </span>
                    {job.name}
                  </p>
                  <p>
                    <span>Company: </span>
                    {job.company}
                  </p>
                  <Link to={`/vakancy/${job.id}`}>
                    <button>MORE</button>
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
            <div className="Pagination">
              {/* Создаем кнопки для пагинации */}
              {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
                const page = startPage + index;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    disabled={currentPage === page}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
        </SCMainPage>
      </ThemeProvider>
    </>
  );
};
