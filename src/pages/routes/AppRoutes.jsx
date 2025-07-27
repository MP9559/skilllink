import { Routes, Route } from "react-router-dom";
import Home from "../Home"
import Login from "../Login"
import Register from "../Register";
import AfterLogin from "../AfterLogin";
import EditProfile from "../Profile/EditProfile";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/after-login" element={<AfterLogin />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;