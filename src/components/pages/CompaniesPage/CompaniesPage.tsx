import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Импортируем Link
import { useGetCompaniesQuery } from "../../../api/workCardApi";
import { Company } from "../../../api/types";
import { SCCompaniesPage } from "./CompaniesPage.styled";
import { Header } from "../../UI/Header/Header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../UI/Theme/Theme";

export const CompaniesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useGetCompaniesQuery({
    page: currentPage,
  });
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? darkTheme : lightTheme;
  });

  useEffect(() => {
    if (data) {
      console.log("Data:", data);
    }
    if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);

  useEffect(() => {
    if (data) {
      // Сохраняем данные в Local Storage
      localStorage.setItem("Companies", JSON.stringify(data));
    }
    if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  if (isLoading) return <div>Loading...</div>;

  if (!data || !data.results || data.results.length === 0) {
    return <div>No companies found</div>;
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const pages = [];
  const totalPages = Math.min(data.page_count, 5);
  const middlePage = Math.ceil(totalPages / 2);
  const startPage =
    currentPage <= middlePage ? 1 : currentPage - middlePage + 1;
  const endPage = Math.min(data.page_count, startPage + totalPages - 1);
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
                <Link to={`/company/${company.id}`} key={company.id}>
                  {/* Обернем див в Link */}
                  <div className="CompanyCard">
                    <p>
                      <span>Company: </span>
                      {company.name}
                    </p>
                    <img
                      src={company.refs.logo_image}
                      alt="Mini Image"
                      className="CompanyLogo"
                    />
                    {/* <a href={company.refs.landing_page}></a> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
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
