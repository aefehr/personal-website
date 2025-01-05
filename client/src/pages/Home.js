import IntroSection from '.././components/IntroSection';
import DonutComponentOne from '.././components/DonutComponentOne';
import DonutComponentTwo from '.././components/DonutComponentTwo';
import DonutComponentThree from '.././components/DonutComponentThree';
import SphereComponent from '../components/Sphere';

const Home = () => (
  <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
    <div className="scene-container" style={{ position: "relative", width: "100%", height: "100%" }}>
      <IntroSection />
      
      <DonutComponentOne 
        position="bottom-right"
        size="large"
        color="#78FFD1"
      />
      
      <DonutComponentTwo 
        position="top-right"
        size="large"
        color="#FFB3C2"
      />

        <SphereComponent />

        <DonutComponentThree 
            position="bottom-left"
            size="large"
            color="#A7C7E7" 
        />
    </div>
    
  </div>
);

export default Home;