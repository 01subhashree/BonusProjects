import { useState } from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const localqns = JSON.parse(localStorage.getItem("Questions")) || [];
  const [question, setQuestion] = useState([localqns[count]]);
  const [score, setScore] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  const changeQuestion = (answer) => {
    setQuestion([localqns[count]]);
    if (count < localqns.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
    console.log(answer, localqns[count].CorrectAnswer);
    if (answer == localqns[count].CorrectAnswer) {
      setScore(score + 1);
      console.log(score);
    }
    setAnswer("");
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
    <div>
      <h2> This is the question.</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-GDv4TEvVaZePX37LgJqE5p0ldLMVlY4CGpSuR0&s" />
      <h3>Score : {score}</h3>
      {question.map((elem, index) => {
        return (
          <div key={index}>
            <h3>{elem.Question}</h3>
            <div>
              <button>{elem.Options1}</button>
              <button>{elem.Options2}</button>
              <button>{elem.Options3}</button>
              <button>{elem.Options4}</button>
            </div>
            <input
              placeholder={"Answer"}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        );
      })}
      {count === localqns.length - 1 ? (
        <Button value={"Submit"} clickHandler={() => submitHandler(answer)} />
      ) : (
        <Button value={"Next"} clickHandler={() => changeQuestion(answer)} />
      )}
      {!isLogin && <Button value={"Log Out"} clickHandler={logoutHandle} />}
    </div>
  );
}
