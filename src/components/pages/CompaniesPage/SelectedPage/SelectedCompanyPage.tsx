import { useParams } from "react-router-dom";
import { Company } from "../../../../api/types";
import { SCSelectedCompanyPage } from "./SelectedCompanyPage.styled";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../../../UI/Theme/Theme";
import { ThemeProvider } from "styled-components";

export const SelectedCompanyPage = () => {
  const { id } = useParams<{ id?: string }>();

  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
    setTheme(savedTheme);
  }, []);

  // Проверяем, что id не равен undefined
  if (!id) {
    return <div>No company ID provided...</div>;
  }

  // Получаем данные о компаниях из локального хранилища
  const companiesData = localStorage.getItem("Companies");
  const companies: { results: Company[] } = companiesData
    ? JSON.parse(companiesData)
    : { results: [] };

  // Ищем выбранную компанию по id
  const selectedCompany = companies.results.find(
    (company) => company.id === parseInt(id, 10)
  );

  if (!selectedCompany) {
    return <div>No company found...</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <SCSelectedCompanyPage>
        <h2>Company Details</h2>
        <div className="CompanyFrame">
          <img src={selectedCompany.refs.logo_image} id="logo" alt="" />
          <p>
            <span>Name: </span>
            {selectedCompany.name}
          </p>
          <p>
            <span>Industries: </span>
            {selectedCompany.industries[0].name}
          </p>
          <p>
            <span>Locations: </span>
            {selectedCompany.locations[0].name}
          </p>
          <p>
            <span>Size: </span>
            {selectedCompany.size.name}
          </p>
          <div className="CompanyImg">
            <img src={selectedCompany.refs.f1_image} alt="" />
            <img src={selectedCompany.refs.f2_image} alt="" />
            <img src={selectedCompany.refs.f3_image} alt="" />
          </div>
          <p>
            <span>Publication Date: </span>
            {formatDate(selectedCompany.publication_date)}
          </p>
          <a href={selectedCompany.refs.landing_page}>
            Go To The Company Website
          </a>
          <a href={selectedCompany.refs.jobs_page}>Go To The Job's Website </a>
        </div>
      </SCSelectedCompanyPage>
    </ThemeProvider>
    </>
  );
};
