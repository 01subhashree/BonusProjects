import Button from "../../../components/Button";
import InputBox from "../../../components/InputBox";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./AdminLogin.module.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function clickHandler() {
    let adminData = { email: email, password: password, isLoggedIn: true };
    localStorage.setItem("adminAuth", JSON.stringify(adminData));
    if (email !== "" && password !== "") {
      navigate("/adminhome");
    } else alert("Enter Valid Informations ");
  }

  return (
    <div className={style.Container}>
      <h1>Admin Login</h1>
      <InputBox value={email} changeHandler={(e) => setEmail(e.target.value)} />
      <InputBox
        value={password}
        type={"password"}
        changeHandler={(e) => setPassword(e.target.value)}
      />
      <Button clickHandler={clickHandler} value={"Submit"} />
      <span>
        <Link style={{ color: "black" }} to={"/"}>
          Go Back to Homepage
        </Link>
      </span>
    </div>
  );
}

export default AdminLogin;
