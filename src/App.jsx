import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Navigate to='/' />} /> 
      </Routes>
    </Router>
  );
}

export default App;
