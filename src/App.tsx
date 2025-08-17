import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { colors } from './types/colors';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Messages from './pages/Messages';
import People from './pages/People';
import Locations from './pages/Locations';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: colors.dark }} className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;