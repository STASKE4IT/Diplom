import React, { useState, useEffect } from "react";
import { useGetCompaniesQuery } from "../../../api/workCardApi";
import { Company } from "../../../api/types";
import { SCCompaniesPage } from "./CompaniesPage.styled";
import { Header } from "../../UI/Header/Header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../UI/Theme/Theme";

export const CompaniesPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // Состояние для текущей страницы
  const { data, error, isLoading } = useGetCompaniesQuery({
    page: currentPage,
  });
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? darkTheme : lightTheme;
  }); // Состояние текущей темы

  useEffect(() => {
    if (data) {
      console.log("Data:", data);
    }
    if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page); // Обновляем текущую страницу при выборе новой страницы
  };

  if (isLoading) return <div>Loading...</div>;

  if (!data || !data.results || data.results.length === 0) {
    return <div>No companies found</div>;
  }

  const toggleTheme = () => {
    // Текущая тема зависит от предыдущей
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
      return newTheme;
    });
  };

  // Создаем массив номеров страниц для кнопок пагинации
  const pages = [];
  const totalPages = Math.min(data.page_count, 5); // Максимальное количество кнопок пагинации
  const middlePage = Math.ceil(totalPages / 2); // Номер страницы, которая будет в середине
  const startPage =
    currentPage <= middlePage ? 1 : currentPage - middlePage + 1; // Начальная страница для отображения
  const endPage = Math.min(data.page_count, startPage + totalPages - 1); // Конечная страница для отображения
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <ThemeProvider theme={theme}>
        <SCCompaniesPage>
          <div>
            <h2>Companies</h2>
            <div className="CompanyFrame">
              {data.results.map((company: Company) => (
                <div key={company.id} className="CompanyCard">
                  <p>{company.name}</p>
                  <img
                    src={company.refs.logo_image}
                    alt="Mini Image"
                    className="CompanyLogo"
                  />
                  <a href={company.refs.landing_page}></a>
                </div>
              ))}
            </div>
          </div>
          {/* Компонент для выбора страницы */}
          <div>
            {/* Создаем кнопки для пагинации */}
            <div className="Pagination">
              {pages.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  disabled={currentPage === pageNumber}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        </SCCompaniesPage>
      </ThemeProvider>
    </>
  );
};
