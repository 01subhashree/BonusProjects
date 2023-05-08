import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/user/UserLogin";
import AdminLogin from "./pages/admin/AdminLogin";
import CreateQuestion from "./pages/admin/CreateQuestion";
import AdminHome from "./pages/admin/AdminHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/createquestion" element={<CreateQuestion />} />
      </Routes>
    </>
  );
}

export default App;
