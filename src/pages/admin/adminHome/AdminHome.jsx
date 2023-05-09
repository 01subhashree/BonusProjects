/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./AdminHome.module.css";
import Arraydata from "../../../components/Questions";

function AdminHome() {
  useEffect(() => {
    localStorage.setItem("Questions", JSON.stringify(Arraydata));
  }, []);
  const finalData = JSON.parse(localStorage.getItem("Questions")) || [];
  const adminData = JSON.parse(localStorage.getItem("adminAuth"));
  const admin = { ...adminData };

  const navigate = useNavigate();

  const clickHandler = () => {
    if (admin.isLoggedIn == true) {
      navigate("/createquestion");
    }
  };
  const editQuestion = (id) => {
    finalData.find((e) => e.id == id);
  };
  const handelFunction = () => {
    localStorage.removeItem("finalData");
    navigate("/");
  };

  return (
    <div className={style.mainDiv}>
      <h1>Hii Admin </h1>
      <span className={style.buttons}>
        <Button value={"Create Question"} clickHandler={clickHandler} />
      </span>
      <span className={style.mainContainer}>
        {finalData.map((elem) => {
          return (
            <ol key={elem.id} className={style.Options}>
              <li>
                <h3>{elem.Question} </h3>
              </li>
              <ol>
                <li>
                  <p>{elem.Options1}</p>
                </li>
                <li>
                  <p>{elem.Options2}</p>
                </li>
                <li>
                  <p>{elem.Options3}</p>
                </li>
                <li>
                  <p>{elem.Options4}</p>
                </li>
              </ol>
              <img src={elem.imageData} style={{ width: "200px" }} />
              <span style={{ width: "30vw" }}>
                <Button
                  className={style.button1}
                  value={"Edit Questions"}
                  clickHandler={editQuestion(elem.id)}
                />
              </span>
            </ol>
          );
        })}
      </span>
      <Button value={"LogOut"} clickHandler={handelFunction} />
    </div>
  );
}

export default AdminHome;
