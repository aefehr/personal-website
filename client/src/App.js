import './App.css';
import GrainEffect from './components/GrainEffect';
import IntroSection from './components/IntroSection';
import PositionableSphere from './components/PostionableSphere';
import DonutComponentOne from './components/DonutComponentOne';

const App = () => (
  <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
    <GrainEffect />

    <IntroSection />

    <PositionableSphere position="top-left" size="large" color="#FFB3C2" />
    
    <DonutComponentOne 
      position="bottom-right"
      size="large"
      color="#78FFD1"
    />
    
  </div>
);

export default App;