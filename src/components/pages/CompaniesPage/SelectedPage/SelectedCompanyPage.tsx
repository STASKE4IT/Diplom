import { useParams } from "react-router-dom";
import { Company } from "../../../../api/types";
import { SCSelectedCompanyPage } from "./SelectedCompanyPage.styled";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../../../UI/Theme/Theme";
import { ThemeProvider } from "styled-components";
import { Loader2 } from "../../../UI/Loader2/Loader2";

export const SelectedCompanyPage = () => {
  const { id } = useParams<{ id?: string }>();

  const [theme, setTheme] = useState(lightTheme);
  const [isLoading, setLoading] = useState(true); 

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    setLoading(true); 
    const fetchData = async () => {
      try {
        // Ваша логика загрузки данных...
        console.log("Fetching data for company with ID:", id);
        setLoading(false); 
      } catch (error) {
        console.error("Error:", error);
        setLoading(false); 
      }
    };
    fetchData();
  }, [id]); 

  if (!id) {
    console.error("No company ID provided...");
    return <div>No company ID provided...</div>;
  }

  const companiesData = localStorage.getItem("Companies");
  const companies: { results: Company[] } = companiesData
    ? JSON.parse(companiesData)
    : { results: [] };

  const selectedCompany = companies.results.find(
    (company) => company.id === parseInt(id, 10)
  );

  if (isLoading) {
    console.log("Loading...");
    return <Loader2 />;
  }

  if (!selectedCompany) {
    console.error("No company found...");
    return <div>No company found...</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  console.log("Selected company:", selectedCompany);

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
