import React, { useEffect, useRef } from "react";

const NavGrainEffect = ({ isOpen }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
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
        data[i + 3] = 15; // Reduced opacity even further for nav
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let animationFrameId;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      if (frameCount % 2 === 0) { // Slightly slower update rate
        generateStatic();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    if (isOpen) {
      resizeCanvas();
      animate();
      window.addEventListener("resize", resizeCanvas);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isOpen]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 11, // Between nav menu (12) and main grain effect (10)
        pointerEvents: "none",
        opacity: isOpen ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    />
  );
};

export default NavGrainEffect;