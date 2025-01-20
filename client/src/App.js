import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import GrainEffect from './components/GrainEffect';
import Cursor from './components/Cursor';

const App = () => (
  <Router>
      <div>
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <GrainEffect />
    </div>  
  </Router>
);

export default App;
