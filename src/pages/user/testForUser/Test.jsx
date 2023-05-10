import { useState } from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import InputBox from "../../../components/InputBox";
import style from "./Test.module.css";

export default function Test() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const localqns = JSON.parse(localStorage.getItem("Questions")) || [];
  const [question, setQuestion] = useState([localqns[count]]);
  const [score, setScore] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  const changeQuestion = (answer) => {
    setCount(count + 1);
    setQuestion([localqns[count + 1]]);
    console.log(answer, localqns[count].CorrectAnswer);
    if (answer == localqns[count].CorrectAnswer) {
      setScore(score + 1);
      console.log(score);
    }
    setAnswer("");
    console.log(count, question);
  };

  function submitHandler(answer) {
    if (answer == localqns[count].CorrectAnswer) {
      setScore(score + 1);
      console.log(score);
    }
    setIsLogin(false);
  }
  const logoutHandle = () => {
    navigate("/");
  };

  return (
    <div className={style.Box}>
      <div className={style.mainDiv}>
        <h2> This is the question.</h2>
        <img
          style={{ width: "5rem", borderRadius: "30rem" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-GDv4TEvVaZePX37LgJqE5p0ldLMVlY4CGpSuR0&s"
        />
        <h3>Score : {score}</h3>

        {question.map((elem, index) => {
          return (
            <span key={index} className={style.mainContainer}>
              <h3>{elem.Question}</h3>
              <div className={style.btnDiv}>
                <button style={{ backgroundColor: "aliceblue" }}>
                  {elem.Options1}
                </button>
                <button style={{ backgroundColor: "aliceblue" }}>
                  {elem.Options2}
                </button>
                <button style={{ backgroundColor: "aliceblue" }}>
                  {elem.Options3}
                </button>
                <button style={{ backgroundColor: "aliceblue" }}>
                  {elem.Options4}
                </button>
              </div>
              <span>
                <img
                  style={{ width: "250px", height: "150px" }}
                  src={elem.imageData}
                />
              </span>
              <span>
                <InputBox
                  placeholder="enter your Answer"
                  changeHandler={(e) => setAnswer(e.target.value)}
                />
              </span>
            </span>
          );
        })}

        <div className={style.buttons}>
          {count === localqns.length - 1 ? (
            <Button
              value={"Submit"}
              clickHandler={() => submitHandler(answer)}
            />
          ) : (
            <Button
              value={"Next"}
              clickHandler={() => changeQuestion(answer)}
            />
          )}
        </div>
        <div>
          {!isLogin && <Button value={"Log Out"} clickHandler={logoutHandle} />}
        </div>
      </div>
    </div>
  );
}
