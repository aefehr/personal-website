import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import "./Cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const resetTimeout = useRef(null);
  const isHovering = useRef(false);
  const location = useLocation(); // Track current route

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const offset = isHovering.current ? 25 : 12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX - offset}px, ${clientY - offset}px)`;
      }

      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDistance = 3; 
      const dotX = (dx / distance || 0) * Math.min(distance, maxDistance);
      const dotY = (dy / distance || 0) * Math.min(distance, maxDistance);

      if (dotRef.current) {
        dotRef.current.style.transition = "";
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }

      lastX = clientX;
      lastY = clientY;

      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }

      resetTimeout.current = setTimeout(() => {
        if (dotRef.current) {
          dotRef.current.style.transition = "transform 0.3s ease-out";
          dotRef.current.style.transform = "translate(0px, 0px)";
        }
      }, 100);
    };

    const handleHover = () => {
      isHovering.current = true;
      if (cursorRef.current) {
        cursorRef.current.classList.add("cursor-hover");
      }
      if (dotRef.current) {
        dotRef.current.classList.add("dot-hidden");
      }
    };

    const handleUnhover = () => {
      isHovering.current = false;
      if (cursorRef.current) {
        cursorRef.current.classList.remove("cursor-hover");
      }
      if (dotRef.current) {
        dotRef.current.classList.remove("dot-hidden");
      }
    };

    const resetDotPosition = () => {
      if (dotRef.current) {
        dotRef.current.style.transition = "transform 0.3s ease-out";
        dotRef.current.style.transform = "translate(0px, 0px)";
      }
    };

    // Attach event listeners
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", resetDotPosition);

    // Reattach hover listeners every time the route changes
    const attachHoverListeners = () => {
      const links = document.querySelectorAll(
        "a, .link, .link span, .intro-links a, .contact-info a, .contact-info .arrow, .nav-btn, .resume-link"
      );

      links.forEach((link) => {
        link.addEventListener("mouseenter", handleHover);
        link.addEventListener("mouseleave", handleUnhover);
      });

      return () => {
        links.forEach((link) => {
          link.removeEventListener("mouseenter", handleHover);
          link.removeEventListener("mouseleave", handleUnhover);
        });
      };
    };

    const cleanupHoverListeners = attachHoverListeners();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", resetDotPosition);
      cleanupHoverListeners(); // Remove event listeners when unmounting

      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
    };
  }, [location.pathname]); // Runs every time route changes

  return (
    <>
      <div ref={cursorRef} className="custom-cursor">
        <div ref={dotRef} className="cursor-dot"></div>
      </div>
    </>
  );
};

export default Cursor;










