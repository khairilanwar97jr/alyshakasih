import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './index.css';
import ExpertisePage from './pages/ExpertisePage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* You can smoothly append deeper routes here later, like /about or /contact */}
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}