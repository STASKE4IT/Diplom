import { Loader } from "../../UI/Loader1/Loader";
import { Loader2 } from "../../UI/Loader2/Loader2";
import { Loader3 } from "../../UI/Loader3/Loader3";
import { SCLoadersPage } from "./LoadersPage.styled";

export const LoadersPage = () => {

  return (
    <>
      <SCLoadersPage>
        <div className="loading1">
          <Loader3 />
        </div>
        <div className="loading2">
          <Loader2 />
        </div>
        <div className="loading3">
          <Loader />
        </div>
      </SCLoadersPage>
    </>
  );
};
