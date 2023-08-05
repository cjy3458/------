import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ContinentSelectPage from "./pages/ContinentSelectPage";
import Signup from "./pages/Signup";
import MentiSignup from "./pages/MentiSignup";
import MentoSignup from "./pages/MentoSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentosignup" element={<MentoSignup />} />
        <Route path="/mentisignup" element={<MentiSignup />} />
        <Route path="/continentSelect" element={<ContinentSelectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
