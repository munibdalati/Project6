import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect } from 'react';
// import NavBarComp from './components/NavBarComp';
// import Footer from './components/Footer';
import Home from "./components/Home";
import PrayersList from "./components/PrayersList";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PrayersList" element={<PrayersList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
