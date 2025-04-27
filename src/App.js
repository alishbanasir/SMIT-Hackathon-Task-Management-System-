import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Hero from "./components/Hero";
import Loginpage from "./routes/Loginpage";
import Signuppage from "./routes/Signuppage";
import Dashboardpage from "./routes/Dashboardpage";
import Headerpage from "./routes/Headerpage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/header" element={<Headerpage />} /> {/* Changed path to /header */}
          <Route path="/dashboard" element={<Dashboardpage />} />
        </Routes>
      </Router>
    </>
  );
}


