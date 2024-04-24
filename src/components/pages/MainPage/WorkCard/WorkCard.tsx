import { WorkCardElem } from "./WorkCardElem";
import { data } from "./data";

export const WorkCard = () => {
  return (
    <div className="workCardFrame">
      {data &&
        data.map((elem) => (
          <WorkCardElem
            imgLink={elem.imgLink}
            mainText={elem.mainText}
            mainTextDescription={elem.mainTextDescription}
            secondText={elem.secondText}
            secondTextDescription={elem.secondTextDescription}
          />
        ))}
    </div>
  );
};
