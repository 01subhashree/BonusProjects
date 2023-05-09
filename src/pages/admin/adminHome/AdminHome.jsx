/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../../redux/createSlicer";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectData = useSelector((state) => state.questions.data);

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple"
      )
      .then((response) => dispatch(addData(response.data.results || null)));
  }, []);

  const clickHandler = () => {
    navigate("/createquestion");
  };

  // console.log(selectData);
  return (
    <div>
      <h1>Hii Admin </h1>
      <span>
        <Button value={"Edit Questions"} />
        <Button value={"Create Question"} clickHandler={clickHandler} />
      </span>
      <span>
        {selectData.map((elem, index) => {
          return (
            <ul key={index}>
              <li>{elem.question} </li>
              <ol>{elem.options}</ol>
            </ul>
          );
        })}
      </span>
    </div>
  );
}

export default AdminHome;
