import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import GrainEffect from './components/GrainEffect';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>

    <GrainEffect />
  </div>
);

export default App;
