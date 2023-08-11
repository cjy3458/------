import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ContinentSelectPage from "./pages/ContinentSelectPage";
import Signup from "./pages/Signup";
import MentorSignup from "./pages/MentorSignup";
import MenteeSignup from "./pages/MenteeSignup";
import ContinentCommunityPage from "./pages/ContinentCommunityPage";
import MentorInfoModal from "./components/community/mentor/MentorInfoModal";
import TipsModal from "./components/community/tips/TipsModal";
import ViewPostPage from "./pages/ViewPostPage";
import ApplyPage from "./pages/ApplyPage";
import ApplyAlertPage from "./pages/ApplyAlertPage";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/25" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentorsignup" element={<MentorSignup />} />
        <Route path="/menteesignup" element={<MenteeSignup />} />
        <Route path="/continentSelect" element={<ContinentSelectPage />} />
        <Route
          path="/community/:continent"
          element={<ContinentCommunityPage />}
        >
          <Route path="mentor" element={<MentorInfoModal />} />
          <Route path="tips" element={<TipsModal />} />
        </Route>
        <Route path="/viewPost/:number" element={<ViewPostPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/5321" element={<ApplyAlertPage />} />
        <Route path="/" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
