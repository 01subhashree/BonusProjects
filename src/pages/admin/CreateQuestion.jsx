import { useState } from "react";
import Button from "../../components/Button";
import FormInput from "../../components/InputBox";
import { addQuestion } from "../../redux/createSlicer";
import { useDispatch } from "react-redux";

function CreateQuestion() {
  const [questionData, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [question2, setOption2] = useState("");
  const [question3, setOption3] = useState("");
  const [question4, setOption4] = useState("");
  const [corrctAnsIdx, setCorrectAnsIdx] = useState(0);
  const dispatch = useDispatch();

  function handleQuestionAdd() {
    const questionObj = {
      question: questionData,
      correct_answer: corrctAnsIdx,
      options: [option1, question2, question3, question4],
    };
    dispatch(addQuestion(questionObj));
  }

  return (
    <div>
      <h1>question</h1>
      <FormInput
        placeholder="Question here..."
        changeHandler={(e) => setQuestion(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Option 1"
        changeHandler={(e) => setOption1(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Option 2"
        changeHandler={(e) => setOption2(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Option 3"
        changeHandler={(e) => setOption3(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Option 4"
        changeHandler={(e) => setOption4(e.target.value)}
        type={"text"}
      />
      <FormInput
        placeholder="Correct option number"
        changeHandler={(e) => setCorrectAnsIdx(e.target.value)}
        type={"number"}
      />
      <input type="file" />
      <Button clickHandler={handleQuestionAdd} value={"Submit"} />
    </div>
  );
}

export default CreateQuestion;
