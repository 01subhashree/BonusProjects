// import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

function UserLogin() {
  return (
    <div>
      <h2>User Login</h2>
      <InputBox />
      <InputBox />
      <Button value={"Submit"} />
      <span>
        Switch to <Link to="/admin">admin</Link>
      </span>
    </div>
  );
}

export default UserLogin;
