import { Header } from "../../UI/Header/Header";
import { SCMainPage } from "./MainPage.styled";
import { WorkCard } from "./WorkCard/WorkCard";
import { data } from "./WorkCard/data";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <Header />
      <SCMainPage>
        <div className="MainPageFrame">
          <p className="OfferNum">Количество актуальных предложений: {data.length}</p>
          <div className="workFrame">
            <WorkCard />
          </div>
        </div>
      </SCMainPage>
    </div>
  );
};
