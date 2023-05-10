/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Button from "../../../components/Button";
import FormInput from "../../../components/InputBox";
import { useNavigate } from "react-router-dom";
import style from "./CreateQuestion.module.css";

function CreateQuestion() {
  const [questionData, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [corrctAnsIdx, setCorrectAnsIdx] = useState("");
  const navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem("Questions")) || [];

  function handleQuestionAdd() {
    const questionObj = {
      id: new Date(),
      Question: questionData,
      Options1: option1,
      Options2: option2,
      Options3: option3,
      Options4: option4,
      CorrectAnswer: corrctAnsIdx,
      imageData: imageUrl,
    };
    if (
      questionData === "" ||
      corrctAnsIdx === "" ||
      option1 === "" ||
      option2 === "" ||
      option3 === "" ||
      option4 === "" ||
      imageUrl === ""
    ) {
      alert("Please fill all the inputFields");
    } else {
      const newQuestions = [...localData, questionObj];
      localStorage.setItem("Questions", JSON.stringify(newQuestions));
    }
  }
  function handleImagePick(e) {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function () {
      setImageUrl(reader.result);
    };
  }
  const changePage = () => {
    navigate("/adminhome");
  };

  return (
    <div className={style.box}>
      <h1>question</h1>
      <div className={style.inputBox}>
        <FormInput
          placeholder="Question here..."
          changeHandler={(e) => setQuestion(e.target.value)}
        />
        <FormInput
          placeholder="Option 1"
          changeHandler={(e) => setOption1(e.target.value)}
        />
        <FormInput
          placeholder="Option 2"
          changeHandler={(e) => setOption2(e.target.value)}
        />
        <FormInput
          placeholder="Option 3"
          changeHandler={(e) => setOption3(e.target.value)}
        />
        <FormInput
          placeholder="Option 4"
          changeHandler={(e) => setOption4(e.target.value)}
        />
        <FormInput
          placeholder="Correct option number"
          changeHandler={(e) => setCorrectAnsIdx(e.target.value)}
        />
        <input type="file" onChange={handleImagePick} />
      </div>
      <Button clickHandler={handleQuestionAdd} value={"Submit"} />
      <Button value={"Go back to Question page"} clickHandler={changePage} />
    </div>
  );
}

export default CreateQuestion;
