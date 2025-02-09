import IntroSection from '.././components/IntroSection';
import ThreeShapes from '../components/ThreeShapes';

const Home = () => (
  <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
    <ThreeShapes />
    <div style={{ position: "relative", zIndex: 2 }}>
      <IntroSection />
    </div>
  </div>
);

export default Home;