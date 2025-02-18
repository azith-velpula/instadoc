import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Consultations from './pages/Consultations';
import Prescriptions from './pages/Prescriptions';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;