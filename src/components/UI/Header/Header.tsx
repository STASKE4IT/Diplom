import { Link } from "react-router-dom";
import { AppButton } from "../AppButton/AppButton";
import { SCHeader } from "./Header.styled";

export const Header = () => {
  return (
    <SCHeader>
      <div className="logoPart">
        <img src="./src/images/logo2.png" alt="" id="logo" />
      </div>
      <nav id="navigation">
        <a href="/main" className="a">MainPage</a>
        <a href="/main" className="a">Categories</a>
        <a href="/main" className="a">Page2</a>
        <a href="/main" className="a">Page3</a>
        <a href="/main" className="a">Page4</a>
        <a href="/main" className="a">Page5</a>
      </nav>
      <Link to="/profile">
        <AppButton type={"button"} buttonText={"Profile"} className={"asd"}/>
      </Link>
    </SCHeader>
  );
};
