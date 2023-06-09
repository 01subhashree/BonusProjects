import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/user/login/UserLogin";
import AdminLogin from "./pages/admin/login/AdminLogin";
import CreateQuestion from "./pages/admin/createQn/CreateQuestion";
import AdminHome from "./pages/admin/adminHome/AdminHome";
import Home from "./pages/home/Home";
import Test from "./pages/user/testForUser/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/createquestion" element={<CreateQuestion />} />
        <Route path="/homelogin" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
