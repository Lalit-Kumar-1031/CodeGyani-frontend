import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/public/Home";
import AboutUs from "../pages/public/AboutUs";
import ContactUs from "../pages/public/ContactUs";
import TrainingRegistration from "../pages/user/TrainingRegistration";
import SummerTrainingDetails from "../pages/public/SummerTrainingDetails";
import StudentLayout from "../layouts/StudentLayout";
import StudentHome from "../pages/user/StudentHome";

export default function AppRoutes() {
  return (
    <Routes>
      {/* UserLayout */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
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
