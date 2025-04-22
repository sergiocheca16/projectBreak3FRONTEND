import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Appointments from './components/Appointments';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Clínica Dental</h1>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

