// src/components/GrainEffect.js
import React, { useEffect, useRef } from "react";

const GrainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const SCALE = 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * SCALE;
      canvas.height = window.innerHeight * SCALE;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(SCALE, SCALE);
    };

    const generateStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const { data } = imageData;

      for (let i = 0; i < data.length; i += 4) {
        const gray = Math.random() * 255; // Random grayscale value
        data[i] = gray; // Red
        data[i + 1] = gray; // Green
        data[i + 2] = gray; // Blue
        data[i + 3] = 15; // Reduced Alpha (opacity)
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let frameCount = 0;

    const animate = () => {
      frameCount++;
      if (frameCount % 1 === 0) { // Change `% 1` to `% 2` or `% 3` for slower updates
        generateStatic();
      }
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      id="grainCanvas"
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default GrainEffect;

