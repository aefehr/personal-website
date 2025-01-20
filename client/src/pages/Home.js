import IntroSection from '.././components/IntroSection';
import DonutComponentOne from '.././components/DonutComponentOne';
import DonutComponentTwo from '.././components/DonutComponentTwo';
import DonutComponentThree from '.././components/DonutComponentThree';
import SphereComponent from '../components/Sphere';
import SpinningFlatDonut from '../components/SpinningFlatDonut';

const Home = () => (
  <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
    <div style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>
      <DonutComponentOne 
          color="#78FFD1"
      />
      <SpinningFlatDonut />
      <DonutComponentTwo 
          color="#FFB3C2"
      />

      <SphereComponent />

      <DonutComponentThree 
          color="#A7C7E7" 
      />
    </div>
    <div style={{ position: "relative", zIndex: 2 }}>
      <IntroSection />
    </div>
  </div>
);

export default Home;