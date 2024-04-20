import { AppButton } from "../../UI/AppButton/AppButton";
import { AppInput } from "../../UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.styled";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <div className="login">
        <AppInput inputType={"text"} inputPlaceHolder={"Имя"} />
        <AppInput inputType={"password"} inputPlaceHolder={"Пароль"} />
        <AppButton />
        <div className="registration">
          <span></span>
        </div>
      </div>
    </SCLoginPage>
  );
};
