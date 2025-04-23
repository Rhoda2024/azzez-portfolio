import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import FortunePage from "./Pages/FortunePage";
import EaseFarmsPage from "./Pages/EaseFarmsPage";
import RadishPlansPage from "./Pages/RadishPlansPage";
import HealingRaysPage from "./Pages/HealingRaysPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fortune" element={<FortunePage />} />
        <Route path="/easefarm" element={<EaseFarmsPage />} />
        <Route path="/radishplan" element={<RadishPlansPage />} />
        <Route path="/healingrays" element={<HealingRaysPage />} />
      </Routes>
    </div>
  );
}

export default App;
