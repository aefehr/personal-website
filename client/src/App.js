import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Conact';
import GrainEffect from './components/GrainEffect';
import Cursor from './components/Cursor';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <PageTitleUpdater />
      <div>
        <Cursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GrainEffect />
      </div>
    </Router>
  );
};

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home | Allie Fehr",
      "/projects": "Projects | Allie Fehr",
      "/about": "About | Allie Fehr",
      "/contact": "Contact | Allie Fehr",
    };

    document.title = titles[location.pathname] || "Allie Fehr"; // Fallback title
  }, [location]);

  return null; 
};

export default App;