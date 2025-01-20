import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import GrainEffect from './components/GrainEffect';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>

    <GrainEffect />
  </div>
);

export default App;
