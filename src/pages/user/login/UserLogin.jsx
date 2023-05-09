// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import InputBox from "../../../components/InputBox";

function UserLogin() {
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/homelogin");
  };
  return (
    <div>
      <h2>User Login</h2>
      <InputBox placeholder="enter " />
      <InputBox placeholder="enter " />
      <Button value={"Submit"} clickHandler={changePage} />
      <span>
        <Link to="/">Go Back to Homepage</Link>
      </span>
    </div>
  );
}

export default UserLogin;
