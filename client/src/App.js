import './App.css';
import Blob from './components/Blob';
import GrainEffect from './components/GrainEffect';
import BlobDonut from './components/BlobDonut';

const App = () => (
  <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
    <GrainEffect />
    <BlobDonut
      style={{ position: "absolute", bottom: "20%", right: "10%", width: "300px" }}
      gradientId="blobGradient"
      colors={["#7FFFD4", "#4682B4"]}
    />
    <Blob
      style={{ position: "absolute", top: "10%", left: "20%", width: "300px" }}
      gradientId="blob1"
      colors={["#FFD700", "#FF8C00"]}
    />
    <Blob
      style={{
        position: "absolute",
        bottom: "15%",
        right: "15%",
        width: "250px",
        transform: "rotate(45deg)",
      }}
      gradientId="blob2"
      colors={["#7FFFD4", "#4682B4"]}
    />
    <Blob
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "350px",
        transform: "translate(-50%, -50%) rotate(-30deg)",
      }}
      gradientId="blob3"
      colors={["#FF69B4", "#8A2BE2"]}
    />
  </div>
);

export default App;
