import { SCLoader2 } from "./Loader2.styled";
import { useState, useEffect } from "react";

export const Loader2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 300); // Измените значение для задержки по вашему усмотрению


    return () => clearInterval(interval);
  }, []);

  const images = [
    "./src/images/human.png",
    "./src/images/human.png",
    "./src/images/human.png",
    "./src/images/human.png",
    "./src/images/car.png",
    "./src/images/human3.png",
    "./src/images/human2.png",
    "./src/images/carmove.png"
  ];

  return (
    <SCLoader2>
      {/* Фоновый градиентный лоадер */}
      <span className="loader"></span>
      {/* Контейнер для изображений */}
      <div className="GastriFrame">
        {images.slice(0, currentIndex + 1).map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </SCLoader2>
  );
};
