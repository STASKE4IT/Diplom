import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { SCProfilePage } from "./ProfilePage.styled";
import { Header } from "../../UI/Header/Header";

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);

  return (
    <>
      <Header />
      <SCProfilePage>
        <div className="profileInfo">
          <img src="./src/images/me.jpg" alt="" />
          <h3>Имя: {user?.name}</h3>
          <h3>E-mail: {user?.mail}</h3>
          <h3>Номер телефона: {user?.phone_number}</h3>
          <h3>User ID: {user?.user_id}</h3>
          <h3>Город: {user?.city}</h3>
          <h3>Дата регистрации: {user?.reg_date}</h3>
        </div>
      </SCProfilePage>
    </>
  );
};
