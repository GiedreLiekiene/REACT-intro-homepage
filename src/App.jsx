import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage"
import RegisterPage from "./pages/registerPage/RegisterPage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
