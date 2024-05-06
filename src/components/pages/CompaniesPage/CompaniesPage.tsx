import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { useGetCompaniesQuery } from "../../../api/workCardApi";
import { Company } from "../../../api/types";
import { SCCompaniesPage } from "./CompaniesPage.styled";
import { Header } from "../../UI/Header/Header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../UI/Theme/Theme";
import { Loader2 } from "../../UI/Loader2/Loader2";

export const CompaniesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useGetCompaniesQuery({
    page: currentPage,
  });
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    if (data) {
      console.log("Data:", data);
      localStorage.setItem("Companies", JSON.stringify(data));
    }
    if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    console.log("Loading...");
    return <div><Loader2/></div>;
  }

  if (!data || !data.results || data.results.length === 0) {
    console.log("No companies found");
    return <div>No companies found</div>;
  }

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  const totalPages = Math.min(data.page_count, 5);
  const middlePage = Math.ceil(totalPages / 2);
  const startPage = Math.max(1, currentPage - middlePage + 1);
  const endPage = Math.min(data.page_count, startPage + totalPages - 1);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

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
