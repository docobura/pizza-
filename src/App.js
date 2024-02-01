import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MenuPage from './pages/menu'; // Change the import name to avoid conflicts

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} /> {/* Change the element to use the corrected MenuPage component */}
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
