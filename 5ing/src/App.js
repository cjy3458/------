import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ContinentSelectPage from "./pages/ContinentSelectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/continentSelect" element={<ContinentSelectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
