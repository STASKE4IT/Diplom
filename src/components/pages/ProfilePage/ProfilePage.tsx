import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const ProfilePage = () => {
    const user = useSelector((state: RootState) => state.userSlice.user)

    return(
        <div>
            <h1>{user?.name}</h1>
            <h1>{user?.mail}</h1>
            <h1>{user?.phone_number}</h1>
            <h1>{user?.user_id}</h1>
            <h1>{user?.city}</h1>
            <h1>{user?.reg_date}</h1>
        </div>
        )
}