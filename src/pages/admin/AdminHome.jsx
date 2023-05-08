import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../redux/createSlicer";
import Button from "../../components/Button";

function AdminHome() {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const selectData = useSelector((state) => state.questions.data);

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple"
      )
      .then((response) => dispatch(addData(response.data.results || null)));
  }, []);
  return (
    <div>
      <h1>Hii Admin </h1>
      <span>
        <Button value={"Edit Questions"} />
        <Button value={"Create Question"} />
      </span>
      <span>{JSON.stringify(selectData)}</span>
    </div>
  );
}

export default AdminHome;
