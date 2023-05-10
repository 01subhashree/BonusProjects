import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import style from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  function clickHandlerAdmin() {
    navigate("/admin");
  }
  const clickHandlerUser = () => {
    navigate("/user");
  };
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <Button value={"ADMIN"} clickHandler={clickHandlerAdmin} />
        <Button value={"USER"} clickHandler={clickHandlerUser} />
      </div>
    </div>
  );
}
