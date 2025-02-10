import React, { useEffect, useRef } from "react";

const NavGrainEffect = () => {
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const { data } = imageData;

      for (let i = 0; i < data.length; i += 4) {
        const gray = Math.random() * 255;
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
        data[i + 3] = 20;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let frameCount = 0;

    const animate = () => {
      frameCount++;
      if (frameCount % 1 === 0) {
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
      id="navGrainCanvas"
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 13, // Different z-index to be above nav menu but below about image
        pointerEvents: "none",
      }}
    />
  );
};

export default NavGrainEffect;