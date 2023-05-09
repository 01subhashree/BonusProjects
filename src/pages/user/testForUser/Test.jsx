import { useState } from "react";
import Button from "../../../components/Button";

export default function Test() {
  const [count, setCount] = useState(0);

  function startQuiz(count) {
    console.log(count);
    const localqns = JSON.parse(localStorage.getItem("Questions"));
    // localqns.find((ele,index)=>index==
  }
  return (
    <div>
      <h2> This is the question.</h2>
      <Button value={"Start Test"} clickHandler={startQuiz(count)} />
      <div>
        <div>
          <div>1. options</div>
          <div>2. options</div>
          <div>3. options</div>
          <div>4. options</div>
        </div>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-GDv4TEvVaZePX37LgJqE5p0ldLMVlY4CGpSuR0&s" />
        </div>
      </div>
      <Button value={"Next"} />
    </div>
  );
}
