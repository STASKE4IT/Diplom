import { useParams } from "react-router-dom";
import { SCVakancy } from "./SelectedVakancy.styled";
import { useGetJobByIdQuery } from "../../../api/workCardApi";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../Theme/Theme";
import { useEffect, useState } from "react";

export const SelectedVakancy = () => {
  const id = useParams<{ id?: any }>()?.id || "";

  const { data: selectedJob, isLoading, isError } = useGetJobByIdQuery(id);

  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  // Обработка загрузки данных
  if (isLoading) {
    return <div>asDASFPJQEFPIJP</div>;
  }
  if (isError) {
    return <div>Error fetching job...</div>;
  }
  if (!selectedJob) {
    return <div>No job found...</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <SCVakancy>
          <div className="VakancyFrame">
            <h2>{selectedJob.name}</h2>
            <p>
              <span>Company: </span>
              {selectedJob.company.name}
            </p>
            <p>
              <span>Location: </span>
              {selectedJob.locations[0].name}
            </p>
            <p>
              <span>Type: </span>
              {selectedJob.type}
            </p>
            <p>
              <span>Level: </span>
              {selectedJob.levels[0].name}
            </p>
            <p>
              <span>Categories: </span>
              {selectedJob.categories[0].name}
            </p>
            <p>
              <span>Description: </span>
              {selectedJob.contents && (
                <div
                  dangerouslySetInnerHTML={{ __html: selectedJob.contents }}
                />
              )}
            </p>

            <p>
              <span>Link: </span>
              <a href={selectedJob.refs.landing_page}>
                {selectedJob.refs.landing_page}
              </a>
            </p>
            <p>
              <span>Publication Date: </span>
              {formatDate(selectedJob.publication_date)}
            </p>
          </div>
        </SCVakancy>
      </ThemeProvider>
    </>
  );
};
