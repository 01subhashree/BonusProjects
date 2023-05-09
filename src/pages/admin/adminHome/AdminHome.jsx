/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./AdminHome.module.css";
import Arraydata from "../../../components/Questions";

localStorage.setItem("Questions", JSON.stringify(Arraydata));

function AdminHome() {
  const finalData = JSON.parse(localStorage.getItem("Questions")) || [];
  const adminData = JSON.parse(localStorage.getItem("adminAuth"));

  const [data, setData] = useState(finalData);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/createquestion");
  };
  const editQuestion = () => {};
  const handelFunction = () => {
    navigate("/");
  };
  console.log(adminData);

  console.log(data);
  return (
    <div className={style.mainDiv}>
      <h1>Hii Admin </h1>
      <span className={style.buttons}>
        <Button value={"Create Question"} clickHandler={clickHandler} />
        {/* <Button value={"Updated Question"} clickHandler={showUpdatedQn} /> */}
      </span>
      <span className={style.mainContainer}>
        {data.map((elem, index) => {
          return (
            <ol key={index} className={style.Options}>
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
                  clickHandler={editQuestion()}
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
