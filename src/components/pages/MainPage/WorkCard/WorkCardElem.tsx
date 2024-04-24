type WorkCardElemProps = {
  imgLink: string;
  mainText: string;
  mainTextDescription: string;
  secondText: string;
  secondTextDescription: string;
};

export const WorkCardElem = ({
  imgLink,
  mainText,
  mainTextDescription,
  secondText,
  secondTextDescription,
}: WorkCardElemProps) => {
  return (
    <div className="workCard">
      <img src={`./src/images/${imgLink}.jpg`} alt="" id="" />
      <div className="cardText">
        <span>{mainText}</span>
        <p>{mainTextDescription}</p>
        <span>{secondText}</span>
        <p>{secondTextDescription}</p>
      </div>
    </div>
  );
};
