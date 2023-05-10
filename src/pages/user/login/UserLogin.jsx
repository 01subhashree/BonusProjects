// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import InputBox from "../../../components/InputBox";
import style from "./UserLogin.module.css";
import { useState } from "react";
import Arraydata from "../../../components/Questions";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const changePage = () => {
    if (email && password !== "") {
      navigate("/homelogin");
      localStorage.setItem("Questions", JSON.stringify(Arraydata));
      const userData = { isLogin: true, email: email };
      localStorage.setItem("usersData", JSON.stringify(userData));
    } else alert("fill All the inputfields");
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.Div}>
        <h2>User Login</h2>
        <div className={style.input}>
          <InputBox
            placeholder="enter emaile "
            type={"email"}
            changeHandler={(e) => setEmail(e.target.value)}
          />
          <InputBox
            placeholder="enter password "
            type={"password"}
            changeHandler={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button value={"Submit"} clickHandler={changePage} />
        <span style={{ color: "black", marginTop: "1rem" }}>
          <Link to="/">Go Back to Homepage</Link>
        </span>
      </div>
    </div>
  );
}

export default UserLogin;
