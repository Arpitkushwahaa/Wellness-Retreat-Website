import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Retreats from './pages/Retreats';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50 font-sans text-forest-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/retreats" element={<Retreats />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;