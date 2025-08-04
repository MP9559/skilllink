import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register"
import AfterLogin from "../AfterLogin";
import Settings from "../Settings";
import Usertype from "../UserTypeSelection/Usertype";
import UserDashboard from "../UserDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-type" element={<Usertype />} />
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/after-login" element={<AfterLogin />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
