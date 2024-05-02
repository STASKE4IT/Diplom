import { useState } from "react";
import { Link } from "react-router-dom";
import { SCChoise } from "./ChoisePage.styled";

export const ChoisePage = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SCChoise>
      <div className="cumBackFrame">
        <p>Вот послушай, ты передумал, потому что...</p>
        <h1>есть аккаунт, тогда жми сюда</h1>
        <img src="./src/images/finger.png" alt="" />
        <Link to="/">
          <button
            className="cumBackButton"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            CumBack
          </button>
        </Link>
        {isFocused && <img src="./src/images/splash.png" alt="" className="splashImage" />}
        <h2>Agar yomon bola bo'lsang, chiq!</h2>
        <img src="./src/images/finger.png" alt="" />
        <Link to="https://www.youtube.com/watch?v=tPz19M-R69s">
          <button>Ketganskiy!</button>
        </Link>
      </div>
    </SCChoise>
  );
};
