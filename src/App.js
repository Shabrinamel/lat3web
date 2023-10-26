import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './style.css';

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Hero/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
        <Footer />
      </Router>
    );
  }
  

export default App;
