import { useSelector } from "react-redux";
import { Header } from "../../UI/Header/Header";
import { SCProfilePage } from "./ProfilePage.styled";
import { RootState } from "../../../store/store";
import { useGetUserByIdQuery } from "../../../api/userApi";

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);

  const user_id = localStorage.getItem('user_id');

  const { data } = useGetUserByIdQuery(Number(user_id));

  console.log(data);

  return (
    <>
      <Header />
      <SCProfilePage>
        <div className="profileInfo">
          <img src="./src/images/me.jpg" alt="" />
          <p><strong>Имя: </strong>{data?.message.name}</p>
          <p><strong>Почта: </strong>{data?.message.mail}</p>
          <p><strong>Номер телефона: </strong>{data?.message.phone_number}</p>
          <p><strong>User Id: </strong>{data?.message.user_id}</p>
          <p><strong>Город: </strong>{data?.message.city}</p>
          <p><strong>Дата регистрации: </strong>{data?.message.reg_date}</p>
        </div>
      </SCProfilePage>
    </>
  );
};

