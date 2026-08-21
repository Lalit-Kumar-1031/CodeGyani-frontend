import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/public/Home";
import AboutUs from "../pages/public/AboutUs";
import ContactUs from "../pages/public/ContactUs";
import TrainingRegistration from "../pages/user/TrainingRegistration";
import SummerTrainingDetails from "../pages/public/SummerTrainingDetails";
import StudentLayout from "../layouts/StudentLayout";
import StudentHome from "../pages/user/StudentHome";
import Login from "../pages/public/auth/Login";
import Register from "../pages/public/auth/Register";
import SendForgotPasswardOtp from "../pages/public/auth/SendForgotPasswardOtp";
import VerifyForgotPasswardOtp from "../pages/public/auth/VerifyForgotPasswardOtp";
import SetNewPassward from "../pages/public/auth/SetNewPassward";

export default function AppRoutes() {
  return (
    <Routes>
      {/* UserLayout */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/send-forgot-password-otp" element={<SendForgotPasswardOtp />} />
      <Route path="/verify-forgot-password-otp" element={<VerifyForgotPasswardOtp />} />
      <Route path="/set-new-passward" element={<SetNewPassward />} />
        <Route
          path="/training-registration"
          element={<TrainingRegistration />}
        />
        <Route path="/summer-training" element={<SummerTrainingDetails />} />
      </Route>
      {/* Student Layout */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentHome />} />
      </Route>
    </Routes>
  );
}
