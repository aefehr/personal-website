import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Conact';
import GrainEffect from './components/GrainEffect';
import Cursor from './components/Cursor';
import Header from './components/Header';

const App = () => (
  <Router>
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

export default App;
