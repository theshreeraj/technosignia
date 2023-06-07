import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Coursedetails from './pages/coursedetails/Coursedetails';
import Javatest from './pages/coursedetails/Javatest';
import Javadev from './pages/coursedetails/Javadev';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coursedetails" element={<Coursedetails />} />
          <Route path="/javatest" element={<Javatest />} />
          <Route path="/javadev" element={<Javadev />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
