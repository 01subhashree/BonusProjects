import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function clickHandler() {
    let adminData = { email: email, password: password, isLoggedIn: true };
    localStorage.setItem("adminAuth", JSON.stringify(adminData));
    navigate("/adminhome");
  }

  return (
    <div>
      <h1>Admin Login</h1>
      <InputBox value={email} changeHandler={(e) => setEmail(e.target.value)} />
      <InputBox
        value={password}
        changeHandler={(e) => setPassword(e.target.value)}
      />
      <Button clickHandler={clickHandler} value={"Submit"} />
      <span>
        Switch to <Link to={"/"}>User</Link>
      </span>
    </div>
  );
}

export default AdminLogin;
