import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function Home() {
  const navigate = useNavigate();
  function clickHandlerAdmin() {
    navigate("/admin");
  }
  const clickHandlerUser = () => {
    navigate("/user");
  };
  return (
    <div>
      <Button value={"ADMIN"} clickHandler={clickHandlerAdmin} />
      <Button value={"USER"} clickHandler={clickHandlerUser} />
    </div>
  );
}
