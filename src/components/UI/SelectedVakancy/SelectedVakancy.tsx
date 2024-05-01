import { useParams } from "react-router-dom";
import { SCVakancy } from "./SelectedVakancy.styled";
import { useGetJobByIdQuery } from "../../../api/workCardApi";

export const SelectedVakancy = () => {
  const id = useParams<{ id?: any }>()?.id || "";

  const { data: selectedJob, isLoading, isError } = useGetJobByIdQuery(id);

  // Обработка загрузки данных
  if (isLoading) {
    return <div>Loading...</div>;
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
      <SCVakancy>
        <div className="VakancyFrame">
          <h2>{selectedJob.name}</h2>
          <p>
            <span>Компания: </span>
            {selectedJob.company.name}
          </p>
          <p>
            <span>Локация: </span>
            {selectedJob.locations[0].name}
          </p>
          <p>
            <span>Тип: </span>
            {selectedJob.type}
          </p>
          <p>
            <span>Уровень: </span>
            {selectedJob.levels[0].name}
          </p>
          <p>
            <span>Категории: </span>
            {selectedJob.categories[0].name}
          </p>
          <p>
            <span>Описание: </span>
            {selectedJob.contents && (
              <div dangerouslySetInnerHTML={{ __html: selectedJob.contents }} />
            )}
          </p>

          <p>
            <span>Ссылка на вакансию: </span>
            <a href={selectedJob.refs.landing_page}>
              {selectedJob.refs.landing_page}
            </a>
          </p>
          <p>
            <span>Дата публикации: </span>
            {formatDate(selectedJob.publication_date)}
          </p>
        </div>
      </SCVakancy>
    </>
  );
};
